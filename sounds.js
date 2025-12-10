// ============================================
// SOUND EFFECTS SYSTEM
// ============================================

/**
 * Sound Manager - Creates and plays audio using Web Audio API
 * Falls back to simple beep sounds if audio context is not available
 */
class SoundManager {
    constructor() {
        // Initialize audio context (compatible with different browsers)
        this.audioContext = null;
        this.enabled = true;
        
        // Try to create audio context
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioContext = new AudioContext();
        } catch (error) {
            console.warn('Web Audio API not supported:', error);
        }
    }

    /**
     * Toggle sound on/off
     */
    toggleSound() {
        this.enabled = !this.enabled;
        return this.enabled;
    }

    /**
     * Play a correct answer sound (happy, upward tone)
     */
    playCorrectSound() {
        if (!this.enabled || !this.audioContext) return;
        
        try {
            // Resume audio context if suspended (browser security)
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }

            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            // Happy upward chirp
            oscillator.frequency.setValueAtTime(523.25, this.audioContext.currentTime); // C5
            oscillator.frequency.linearRampToValueAtTime(783.99, this.audioContext.currentTime + 0.1); // G5
            
            oscillator.type = 'sine';
            
            // Fade out
            gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.15);
        } catch (error) {
            console.warn('Failed to play correct sound:', error);
        }
    }

    /**
     * Play an incorrect answer sound (gentle, low tone)
     */
    playIncorrectSound() {
        if (!this.enabled || !this.audioContext) return;
        
        try {
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }

            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            // Gentle downward tone (not scary for kids)
            oscillator.frequency.setValueAtTime(392, this.audioContext.currentTime); // G4
            oscillator.frequency.linearRampToValueAtTime(293.66, this.audioContext.currentTime + 0.15); // D4
            
            oscillator.type = 'triangle';
            
            gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.2);
        } catch (error) {
            console.warn('Failed to play incorrect sound:', error);
        }
    }

    /**
     * Play level up celebration sound (exciting fanfare)
     */
    playLevelUpSound() {
        if (!this.enabled || !this.audioContext) return;
        
        try {
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }

            // Create a celebratory chord progression
            const frequencies = [
                { freq: 523.25, start: 0, duration: 0.15 },      // C5
                { freq: 659.25, start: 0.1, duration: 0.15 },    // E5
                { freq: 783.99, start: 0.2, duration: 0.2 },     // G5
                { freq: 1046.50, start: 0.3, duration: 0.3 }     // C6
            ];

            frequencies.forEach(note => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.setValueAtTime(note.freq, this.audioContext.currentTime + note.start);
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime + note.start);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + note.start + note.duration);
                
                oscillator.start(this.audioContext.currentTime + note.start);
                oscillator.stop(this.audioContext.currentTime + note.start + note.duration);
            });
        } catch (error) {
            console.warn('Failed to play level up sound:', error);
        }
    }

    /**
     * Play streak milestone sound (encouraging)
     */
    playStreakSound() {
        if (!this.enabled || !this.audioContext) return;
        
        try {
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }

            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            // Exciting ascending trill
            oscillator.frequency.setValueAtTime(659.25, this.audioContext.currentTime); // E5
            oscillator.frequency.linearRampToValueAtTime(1046.50, this.audioContext.currentTime + 0.2); // C6
            
            oscillator.type = 'square';
            
            gainNode.gain.setValueAtTime(0.15, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.25);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.25);
        } catch (error) {
            console.warn('Failed to play streak sound:', error);
        }
    }

    /**
     * Play game start sound (motivating)
     */
    playStartSound() {
        if (!this.enabled || !this.audioContext) return;
        
        try {
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }

            const notes = [
                { freq: 523.25, start: 0 },    // C5
                { freq: 587.33, start: 0.1 },  // D5
                { freq: 659.25, start: 0.2 }   // E5
            ];

            notes.forEach(note => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.setValueAtTime(note.freq, this.audioContext.currentTime + note.start);
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime + note.start);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + note.start + 0.15);
                
                oscillator.start(this.audioContext.currentTime + note.start);
                oscillator.stop(this.audioContext.currentTime + note.start + 0.15);
            });
        } catch (error) {
            console.warn('Failed to play start sound:', error);
        }
    }

    /**
     * Play game over sound (gentle, not discouraging)
     */
    playGameOverSound() {
        if (!this.enabled || !this.audioContext) return;
        
        try {
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }

            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            // Gentle descending tone
            oscillator.frequency.setValueAtTime(523.25, this.audioContext.currentTime); // C5
            oscillator.frequency.linearRampToValueAtTime(392, this.audioContext.currentTime + 0.4); // G4
            
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.4);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.4);
        } catch (error) {
            console.warn('Failed to play game over sound:', error);
        }
    }

    /**
     * Play typing key sound (subtle click)
     */
    playKeySound() {
        if (!this.enabled || !this.audioContext) return;
        
        try {
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }

            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            // Very short, subtle click
            oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
            oscillator.type = 'square';
            
            gainNode.gain.setValueAtTime(0.05, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.03);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.03);
        } catch (error) {
            // Silently fail for key sounds (too many events)
        }
    }
}

// Create global sound manager instance
const soundManager = new SoundManager();
