// ============================================
// MAIN GAME LOGIC
// ============================================

/**
 * Game State Management
 * Handles all game logic, state, and user interactions
 */
class TypingGame {
    constructor() {
        // Game state
        this.currentMode = 'practice';
        this.currentDifficulty = 'beginner';
        this.isPlaying = false;
        this.isPaused = false;
        
        // Game stats
        this.score = 0;
        this.streak = 0;
        this.bestStreak = 0;
        this.mistakes = 0;
        this.wordsCompleted = 0;
        this.totalWords = 0;
        this.correctWords = 0;
        
        // Timer for timed modes
        this.timeRemaining = 0;
        this.timerInterval = null;
        
        // Current word and word list
        this.currentWord = '';
        this.currentIcon = null;
        this.usedWords = [];
        
        // Player progress
        this.playerProgress = Storage.loadProgress();
        
        // DOM elements (cached for performance)
        this.elements = this.cacheElements();
        
        // Initialize game
        this.init();
    }

    /**
     * Cache DOM elements for better performance
     */
    cacheElements() {
        return {
            targetWord: document.getElementById('target-word'),
            typingInput: document.getElementById('typing-input'),
            inputFeedback: document.getElementById('input-feedback'),
            score: document.getElementById('score'),
            streak: document.getElementById('streak'),
            timer: document.getElementById('timer'),
            timerContainer: document.getElementById('timer-container'),
            level: document.getElementById('level'),
            stars: document.getElementById('stars'),
            progressBar: document.getElementById('progress-bar'),
            progressText: document.getElementById('progress-text'),
            startBtn: document.getElementById('start-btn'),
            resetBtn: document.getElementById('reset-btn'),
            resultsModal: document.getElementById('results-modal'),
            resultsContent: document.getElementById('results-content'),
            playAgainBtn: document.getElementById('play-again-btn'),
            modeButtons: document.querySelectorAll('.mode-btn'),
            difficultyButtons: document.querySelectorAll('.difficulty-btn')
        };
    }

    /**
     * Initialize game and set up event listeners
     */
    init() {
        // Display saved progress
        this.updateProgressDisplay();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Load first word
        this.loadNewWord();
        
        // Focus input field
        this.elements.typingInput.focus();
    }

    /**
     * Set up all event listeners
     */
    setupEventListeners() {
        // Typing input
        this.elements.typingInput.addEventListener('input', (e) => this.handleTyping(e));
        this.elements.typingInput.addEventListener('keydown', (e) => {
            if (this.isPlaying) {
                soundManager.playKeySound();
                highlightKey(e.key);
            }
        });
        
        // Start/Reset buttons
        this.elements.startBtn.addEventListener('click', () => this.startGame());
        this.elements.resetBtn.addEventListener('click', () => this.resetGame());
        this.elements.playAgainBtn.addEventListener('click', () => this.closeModalAndReset());
        
        // Mode selection
        this.elements.modeButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleModeChange(e));
        });
        
        // Difficulty selection
        this.elements.difficultyButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleDifficultyChange(e));
        });
        
        // Keyboard key buttons (for touch devices)
        document.querySelectorAll('.key').forEach(key => {
            key.addEventListener('click', (e) => {
                const letter = e.target.dataset.key;
                if (this.isPlaying && letter) {
                    this.elements.typingInput.value += letter;
                    this.elements.typingInput.dispatchEvent(new Event('input'));
                    soundManager.playKeySound();
                }
            });
        });
        
        // Prevent form submission on enter
        this.elements.typingInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        });
    }

    /**
     * Handle game mode changes
     */
    handleModeChange(e) {
        if (this.isPlaying) return; // Don't allow mode change during game
        
        const mode = e.target.dataset.mode;
        this.currentMode = mode;
        
        // Update button states
        this.elements.modeButtons.forEach(btn => {
            const isActive = btn.dataset.mode === mode;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive);
        });
        
        // Show/hide timer based on mode
        if (mode === 'timed-30' || mode === 'timed-60') {
            this.elements.timerContainer.style.display = 'block';
            this.timeRemaining = mode === 'timed-30' ? 30 : 60;
            this.elements.timer.textContent = this.timeRemaining;
        } else {
            this.elements.timerContainer.style.display = 'none';
        }
    }

    /**
     * Handle difficulty changes
     */
    handleDifficultyChange(e) {
        if (this.isPlaying) return; // Don't allow difficulty change during game
        
        const difficulty = e.target.dataset.difficulty;
        this.currentDifficulty = difficulty;
        
        // Update button states
        this.elements.difficultyButtons.forEach(btn => {
            const isActive = btn.dataset.difficulty === difficulty;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive);
        });
        
        // Load new word from new difficulty
        this.loadNewWord();
    }

    /**
     * Start the game
     */
    startGame() {
        // Reset game stats
        this.score = 0;
        this.streak = 0;
        this.mistakes = 0;
        this.wordsCompleted = 0;
        this.correctWords = 0;
        this.usedWords = [];
        
        // Set total words based on mode
        const settings = DIFFICULTY_SETTINGS[this.currentDifficulty];
        if (this.currentMode === 'practice') {
            this.totalWords = settings.wordsPerLevel;
        } else {
            this.totalWords = 999; // Unlimited for timed mode
        }
        
        // Set up timer for timed modes
        if (this.currentMode === 'timed-30' || this.currentMode === 'timed-60') {
            this.timeRemaining = this.currentMode === 'timed-30' ? 30 : 60;
            this.startTimer();
        }
        
        // Update UI
        this.isPlaying = true;
        this.elements.startBtn.style.display = 'none';
        this.elements.resetBtn.style.display = 'inline-block';
        this.elements.typingInput.disabled = false;
        this.elements.typingInput.value = '';
        this.elements.typingInput.focus();
        
        // Disable mode and difficulty buttons during game
        this.elements.modeButtons.forEach(btn => btn.disabled = true);
        this.elements.difficultyButtons.forEach(btn => btn.disabled = true);
        
        // Load first word
        this.loadNewWord();
        this.updateDisplay();
        
        // Play start sound
        soundManager.playStartSound();
        
        // Show encouraging message
        showFeedback('Let\'s go! 🚀', 'success');
    }

    /**
     * Start countdown timer for timed modes
     */
    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.elements.timer.textContent = this.timeRemaining;
            
            // Visual warning when time is running out
            if (this.timeRemaining <= 10) {
                this.elements.timer.style.color = '#FF6B6B';
                animateElement('timer');
            }
            
            // Time's up!
            if (this.timeRemaining <= 0) {
                this.endGame();
            }
        }, 1000);
    }

    /**
     * Stop timer
     */
    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        this.elements.timer.style.color = '';
    }

    /**
     * Load a new random word
     */
    loadNewWord() {
        const settings = DIFFICULTY_SETTINGS[this.currentDifficulty];
        const wordList = settings.wordList;
        
        // Get a word that hasn't been used recently
        let wordObj;
        let attempts = 0;
        do {
            wordObj = getRandomWord(wordList);
            attempts++;
        } while (this.usedWords.includes(wordObj.word) && attempts < 50);
        
        this.currentWord = wordObj.word;
        this.currentIcon = wordObj.icon;
        
        // Display word with icon if available
        if (this.currentIcon) {
            this.elements.targetWord.innerHTML = `
                <span style="font-size: 4rem; margin-right: 15px;">${this.currentIcon}</span>
                <span>${this.currentWord}</span>
            `;
        } else {
            this.elements.targetWord.textContent = this.currentWord;
        }
        
        // Track used words (keep last 20 to avoid immediate repeats)
        this.usedWords.push(this.currentWord);
        if (this.usedWords.length > 20) {
            this.usedWords.shift();
        }
        
        // Clear input
        this.elements.typingInput.value = '';
        this.elements.typingInput.className = 'typing-input';
    }

    /**
     * Handle typing input
     */
    handleTyping(e) {
        if (!this.isPlaying) return;
        
        const typedText = e.target.value.toLowerCase().trim();
        const targetText = this.currentWord.toLowerCase();
        
        // Check if input matches target so far
        if (targetText.startsWith(typedText)) {
            // Correct so far
            this.elements.typingInput.className = 'typing-input';
            
            // Check if word is complete
            if (typedText === targetText) {
                this.handleCorrectWord();
            }
        } else {
            // Incorrect input
            this.elements.typingInput.className = 'typing-input incorrect';
        }
    }

    /**
     * Handle correct word completion
     */
    handleCorrectWord() {
        const settings = DIFFICULTY_SETTINGS[this.currentDifficulty];
        
        // Update stats
        this.wordsCompleted++;
        this.correctWords++;
        this.score += settings.pointsPerWord;
        this.streak++;
        
        // Track best streak
        if (this.streak > this.bestStreak) {
            this.bestStreak = this.streak;
        }
        
        // Visual feedback
        this.elements.typingInput.className = 'typing-input correct';
        soundManager.playCorrectSound();
        
        // Streak milestones
        if (this.streak % 5 === 0 && this.streak > 0) {
            soundManager.playStreakSound();
            showFeedback(`${getStreakEmoji(this.streak)} ${this.streak} in a row!`, 'success');
            animateElement('streak', 1.3);
        } else {
            showFeedback('✓ Correct!', 'success');
        }
        
        // Update display
        this.updateDisplay();
        
        // Check if level complete (practice mode)
        if (this.currentMode === 'practice' && this.wordsCompleted >= this.totalWords) {
            this.endGame();
        } else {
            // Load next word after short delay
            setTimeout(() => {
                this.loadNewWord();
            }, 500);
        }
    }

    /**
     * Update all display elements
     */
    updateDisplay() {
        // Update stats
        this.elements.score.textContent = this.score;
        this.elements.streak.textContent = this.streak;
        
        // Update progress bar (for practice mode)
        if (this.currentMode === 'practice') {
            updateProgressBar(this.wordsCompleted, this.totalWords);
        } else {
            // For timed mode, show words completed
            updateProgressBar(this.wordsCompleted, this.wordsCompleted + 5);
        }
        
        // Animate score on increase
        if (this.isPlaying) {
            animateElement('score');
        }
    }

    /**
     * Update progress display (level and stars)
     */
    updateProgressDisplay() {
        this.elements.level.textContent = this.playerProgress.level;
        this.elements.stars.textContent = this.playerProgress.stars;
    }

    /**
     * End the game and show results
     */
    endGame() {
        this.isPlaying = false;
        this.stopTimer();
        
        // Calculate final stats
        const accuracy = calculateAccuracy(this.correctWords, this.wordsCompleted || 1);
        const settings = DIFFICULTY_SETTINGS[this.currentDifficulty];
        
        // Award stars based on performance
        let starsEarned = 0;
        if (this.currentMode === 'practice' && this.wordsCompleted >= this.totalWords) {
            starsEarned = settings.starsPerLevel;
            if (accuracy >= 95) starsEarned += 1; // Bonus star for excellent accuracy
        } else if (this.currentMode.startsWith('timed')) {
            // Award stars based on words per minute equivalent
            starsEarned = Math.floor(this.wordsCompleted / 5);
        }
        
        // Update player progress
        const oldStars = this.playerProgress.stars;
        this.playerProgress.stars += starsEarned;
        this.playerProgress.totalScore += this.score;
        this.playerProgress.gamesPlayed += 1;
        this.playerProgress.wordsTyped += this.wordsCompleted;
        this.playerProgress.level = calculateLevel(this.playerProgress.stars);
        
        if (this.bestStreak > this.playerProgress.bestStreak) {
            this.playerProgress.bestStreak = this.bestStreak;
        }
        
        // Check for level up
        const leveledUp = checkLevelUp(oldStars, this.playerProgress.stars);
        
        // Save progress
        Storage.saveProgress(this.playerProgress);
        this.updateProgressDisplay();
        
        // Show confetti and play sound if leveled up
        if (leveledUp) {
            createConfetti();
            soundManager.playLevelUpSound();
            setTimeout(() => {
                showFeedback('🎉 LEVEL UP! 🎉', 'success');
            }, 500);
        } else {
            soundManager.playGameOverSound();
        }
        
        // Show results modal
        this.showResults(accuracy, starsEarned, leveledUp);
        
        // Re-enable controls
        this.elements.modeButtons.forEach(btn => btn.disabled = false);
        this.elements.difficultyButtons.forEach(btn => btn.disabled = false);
    }

    /**
     * Show results modal with game statistics
     */
    showResults(accuracy, starsEarned, leveledUp) {
        const resultsHTML = `
            <div>
                ${leveledUp ? '<div style="font-size: 3rem; margin-bottom: 20px;">🎉 LEVEL UP! 🎉</div>' : ''}
                <div style="font-size: 2rem; margin-bottom: 20px;">${getCongratulationsMessage(accuracy)}</div>
                <div style="text-align: left; display: inline-block;">
                    <div><strong>Words Typed:</strong> ${this.wordsCompleted}</div>
                    <div><strong>Score:</strong> ${this.score}</div>
                    <div><strong>Accuracy:</strong> ${accuracy}%</div>
                    <div><strong>Best Streak:</strong> ${this.bestStreak}</div>
                    <div><strong>Stars Earned:</strong> ⭐ ${starsEarned}</div>
                    <div style="margin-top: 15px; padding-top: 15px; border-top: 2px solid #E2E8F0;">
                        <strong>Level:</strong> ${this.playerProgress.level} | 
                        <strong>Total Stars:</strong> ⭐ ${this.playerProgress.stars}
                    </div>
                </div>
            </div>
        `;
        
        this.elements.resultsContent.innerHTML = resultsHTML;
        this.elements.resultsModal.style.display = 'flex';
        
        // Focus on play again button for accessibility
        setTimeout(() => {
            this.elements.playAgainBtn.focus();
        }, 100);
    }

    /**
     * Close results modal and reset game
     */
    closeModalAndReset() {
        this.elements.resultsModal.style.display = 'none';
        this.resetGame();
    }

    /**
     * Reset game to initial state
     */
    resetGame() {
        // Stop any running timer
        this.stopTimer();
        
        // Reset state
        this.isPlaying = false;
        this.score = 0;
        this.streak = 0;
        this.mistakes = 0;
        this.wordsCompleted = 0;
        this.correctWords = 0;
        this.usedWords = [];
        
        // Reset timer
        if (this.currentMode === 'timed-30') {
            this.timeRemaining = 30;
            this.elements.timer.textContent = '30';
        } else if (this.currentMode === 'timed-60') {
            this.timeRemaining = 60;
            this.elements.timer.textContent = '60';
        }
        
        // Reset UI
        this.elements.startBtn.style.display = 'inline-block';
        this.elements.resetBtn.style.display = 'none';
        this.elements.typingInput.value = '';
        this.elements.typingInput.disabled = false;
        this.elements.typingInput.className = 'typing-input';
        this.elements.inputFeedback.textContent = '';
        this.elements.timer.style.color = '';
        
        // Enable controls
        this.elements.modeButtons.forEach(btn => btn.disabled = false);
        this.elements.difficultyButtons.forEach(btn => btn.disabled = false);
        
        // Update display
        this.updateDisplay();
        this.loadNewWord();
        
        // Focus input
        this.elements.typingInput.focus();
    }
}

// ============================================
// Initialize game when page loads
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Create game instance
    const game = new TypingGame();
    
    // Expose game instance globally for debugging (optional)
    window.typingGame = game;
    
    console.log('🎮 Type Master loaded successfully!');
});
