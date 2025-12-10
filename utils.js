// ============================================
// UTILITY FUNCTIONS AND GAME DATA
// ============================================

/**
 * Word lists organized by difficulty level
 * Beginner: 3-5 letter words
 * Intermediate: 6-8 letter words
 */
const WORD_LISTS = {
    beginner: [
        // 3 letters
        'cat', 'dog', 'sun', 'run', 'fun', 'hat', 'bat', 'rat', 'cup', 'bug',
        'pen', 'car', 'box', 'fox', 'red', 'bed', 'leg', 'egg', 'pie', 'bow',
        // 4 letters
        'love', 'fish', 'star', 'moon', 'tree', 'bird', 'ball', 'book', 'cake',
        'jump', 'play', 'swim', 'sing', 'wave', 'snow', 'rain', 'wind', 'bear',
        // 5 letters
        'apple', 'happy', 'smart', 'smile', 'dance', 'music', 'ocean', 'beach',
        'candy', 'pizza', 'tiger', 'horse', 'plane', 'train', 'house', 'heart'
    ],
    intermediate: [
        // 6 letters
        'dragon', 'rocket', 'castle', 'friend', 'flower', 'button', 'cookie',
        'jungle', 'monkey', 'purple', 'yellow', 'orange', 'winter', 'summer',
        'spring', 'forest', 'island', 'pirate', 'wizard', 'magic',
        // 7 letters
        'rainbow', 'unicorn', 'penguin', 'dolphin', 'giraffe', 'elephant',
        'monster', 'princess', 'kingdom', 'treasure', 'diamond', 'sparkle',
        'adventure', 'butterfly', 'beautiful',
        // 8 letters
        'dinosaur', 'mountain', 'sunshine', 'lemonade', 'birthday', 'chocolate',
        'sandwich', 'umbrella', 'vacation', 'waterfall'
    ]
};

/**
 * Difficulty settings defining game parameters
 */
const DIFFICULTY_SETTINGS = {
    beginner: {
        name: 'Beginner',
        wordsPerLevel: 10,
        allowedMistakes: 3,
        pointsPerWord: 10,
        starsPerLevel: 1,
        wordList: WORD_LISTS.beginner
    },
    intermediate: {
        name: 'Intermediate',
        wordsPerLevel: 15,
        allowedMistakes: 2,
        pointsPerWord: 20,
        starsPerLevel: 2,
        wordList: WORD_LISTS.intermediate
    }
};

/**
 * Level progression system
 * Each level requires more words to complete
 */
const LEVEL_CONFIG = {
    1: { wordsRequired: 10, stars: 5 },
    2: { wordsRequired: 15, stars: 10 },
    3: { wordsRequired: 20, stars: 15 },
    4: { wordsRequired: 25, stars: 20 },
    5: { wordsRequired: 30, stars: 30 }
};

/**
 * localStorage Helper Functions
 * Save and load game progress
 */
const Storage = {
    /**
     * Save player progress to localStorage
     */
    saveProgress(data) {
        try {
            localStorage.setItem('typeMasterProgress', JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Failed to save progress:', error);
            return false;
        }
    },

    /**
     * Load player progress from localStorage
     */
    loadProgress() {
        try {
            const data = localStorage.getItem('typeMasterProgress');
            return data ? JSON.parse(data) : this.getDefaultProgress();
        } catch (error) {
            console.error('Failed to load progress:', error);
            return this.getDefaultProgress();
        }
    },

    /**
     * Get default progress structure
     */
    getDefaultProgress() {
        return {
            level: 1,
            stars: 0,
            totalScore: 0,
            gamesPlayed: 0,
            wordsTyped: 0,
            accuracy: 100,
            bestStreak: 0
        };
    },

    /**
     * Reset all progress
     */
    resetProgress() {
        localStorage.removeItem('typeMasterProgress');
        return this.getDefaultProgress();
    }
};

/**
 * Random word selector from word list
 */
function getRandomWord(wordList) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
}

/**
 * Calculate level from total stars
 */
function calculateLevel(stars) {
    if (stars < 5) return 1;
    if (stars < 10) return 2;
    if (stars < 15) return 3;
    if (stars < 20) return 4;
    return 5;
}

/**
 * Get progress to next level
 */
function getLevelProgress(stars, level) {
    const currentLevelStars = LEVEL_CONFIG[level]?.stars || 0;
    const nextLevelStars = LEVEL_CONFIG[level + 1]?.stars || currentLevelStars;
    
    if (level >= 5) {
        return 100; // Max level
    }
    
    const progress = ((stars - currentLevelStars) / (nextLevelStars - currentLevelStars)) * 100;
    return Math.max(0, Math.min(100, progress));
}

/**
 * Check if player leveled up
 */
function checkLevelUp(oldStars, newStars) {
    const oldLevel = calculateLevel(oldStars);
    const newLevel = calculateLevel(newStars);
    return newLevel > oldLevel;
}

/**
 * Format time for display (MM:SS)
 */
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Calculate accuracy percentage
 */
function calculateAccuracy(correct, total) {
    if (total === 0) return 100;
    return Math.round((correct / total) * 100);
}

/**
 * Debounce function to limit rapid function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Create confetti particle
 */
function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#FF6B9D', '#FEC02F', '#4ADE80', '#667eea', '#764ba2', '#FF6B6B'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        // Random shapes
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }
        
        confettiContainer.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 3500);
    }
}

/**
 * Highlight keyboard key
 */
function highlightKey(letter) {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        if (key.dataset.key === letter.toLowerCase()) {
            key.classList.add('highlight');
            setTimeout(() => {
                key.classList.remove('highlight');
            }, 300);
        }
    });
}

/**
 * Show animated feedback message
 */
function showFeedback(message, type = 'success') {
    const feedback = document.getElementById('input-feedback');
    feedback.textContent = message;
    feedback.className = `input-feedback ${type}`;
    
    setTimeout(() => {
        feedback.textContent = '';
        feedback.className = 'input-feedback';
    }, 2000);
}

/**
 * Update progress bar
 */
function updateProgressBar(current, total) {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const percentage = (current / total) * 100;
    
    progressBar.style.width = percentage + '%';
    progressText.textContent = `${current} / ${total}`;
    
    // Update ARIA attribute
    document.querySelector('.progress-container').setAttribute('aria-valuenow', percentage);
}

/**
 * Animate element with scale effect
 */
function animateElement(elementId, scale = 1.2) {
    const element = document.getElementById(elementId);
    element.style.transform = `scale(${scale})`;
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 300);
}

/**
 * Show/hide element with animation
 */
function toggleElement(elementId, show) {
    const element = document.getElementById(elementId);
    element.style.display = show ? 'block' : 'none';
}

/**
 * Get emoji for feedback based on streak
 */
function getStreakEmoji(streak) {
    if (streak >= 10) return '🔥🔥🔥';
    if (streak >= 5) return '🔥🔥';
    if (streak >= 3) return '🔥';
    return '✨';
}

/**
 * Get congratulatory message based on performance
 */
function getCongratulationsMessage(accuracy) {
    if (accuracy >= 95) return '🌟 Perfect! You\'re amazing!';
    if (accuracy >= 85) return '🎉 Great job! Keep it up!';
    if (accuracy >= 70) return '👍 Good work! You\'re improving!';
    return '💪 Nice try! Practice makes perfect!';
}
