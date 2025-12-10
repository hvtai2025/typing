// ============================================
// UTILITY FUNCTIONS AND GAME DATA
// ============================================

/**
 * Word lists organized by difficulty level with emoji icons
 * Beginner: 3-5 letter words (500+ words)
 * Intermediate: 6-10 letter words (500+ words)
 * Format: { word: 'word', icon: '🎯' }
 * Total: 1000+ words for kids age 10 and under
 */
const WORD_LISTS = {
    beginner: [
        // 3 letters with icons
        { word: 'cat', icon: '🐱' },
        { word: 'dog', icon: '🐶' },
        { word: 'sun', icon: '☀️' },
        { word: 'run', icon: '🏃' },
        { word: 'fun', icon: '🎉' },
        { word: 'hat', icon: '🎩' },
        { word: 'bat', icon: '🦇' },
        { word: 'rat', icon: '🐀' },
        { word: 'cup', icon: '☕' },
        { word: 'bug', icon: '🐛' },
        { word: 'pen', icon: '🖊️' },
        { word: 'car', icon: '🚗' },
        { word: 'box', icon: '📦' },
        { word: 'fox', icon: '🦊' },
        { word: 'red', icon: '🔴' },
        { word: 'bed', icon: '🛏️' },
        { word: 'leg', icon: '🦵' },
        { word: 'egg', icon: '🥚' },
        { word: 'pie', icon: '🥧' },
        { word: 'bow', icon: '🎀' },
        { word: 'bee', icon: '🐝' },
        { word: 'key', icon: '🔑' },
        { word: 'tea', icon: '🍵' },
        { word: 'bus', icon: '🚌' },
        { word: 'ant', icon: '🐜' },
        { word: 'cow', icon: '🐮' },
        { word: 'pig', icon: '🐷' },
        { word: 'owl', icon: '🦉' },
        { word: 'ice', icon: '🧊' },
        { word: 'jam', icon: '🍓' },
        { word: 'nut', icon: '🥜' },
        { word: 'web', icon: '🕸️' },
        { word: 'map', icon: '🗺️' },
        { word: 'eye', icon: '👁️' },
        { word: 'ear', icon: '👂' },
        { word: 'arm', icon: '💪' },
        { word: 'air', icon: '💨' },
        { word: 'sky', icon: '🌤️' },
        { word: 'sea', icon: '🌊' },
        { word: 'gem', icon: '💎' },
        // 4 letters with icons
        { word: 'love', icon: '❤️' },
        { word: 'fish', icon: '🐟' },
        { word: 'star', icon: '⭐' },
        { word: 'moon', icon: '🌙' },
        { word: 'tree', icon: '🌲' },
        { word: 'bird', icon: '🐦' },
        { word: 'ball', icon: '⚽' },
        { word: 'book', icon: '📚' },
        { word: 'cake', icon: '🎂' },
        { word: 'jump', icon: '🦘' },
        { word: 'play', icon: '🎮' },
        { word: 'swim', icon: '🏊' },
        { word: 'sing', icon: '🎤' },
        { word: 'wave', icon: '👋' },
        { word: 'snow', icon: '❄️' },
        { word: 'rain', icon: '🌧️' },
        { word: 'wind', icon: '💨' },
        { word: 'bear', icon: '🐻' },
        { word: 'frog', icon: '🐸' },
        { word: 'duck', icon: '🦆' },
        { word: 'crab', icon: '🦀' },
        { word: 'lion', icon: '🦁' },
        { word: 'deer', icon: '🦌' },
        { word: 'wolf', icon: '🐺' },
        { word: 'panda', icon: '🐼' },
        { word: 'koala', icon: '🐨' },
        { word: 'shark', icon: '🦈' },
        { word: 'whale', icon: '🐋' },
        { word: 'snail', icon: '🐌' },
        { word: 'fire', icon: '🔥' },
        { word: 'gift', icon: '🎁' },
        { word: 'ring', icon: '💍' },
        { word: 'bell', icon: '🔔' },
        { word: 'coin', icon: '🪙' },
        { word: 'lamp', icon: '💡' },
        { word: 'door', icon: '🚪' },
        { word: 'tent', icon: '⛺' },
        { word: 'boat', icon: '⛵' },
        { word: 'ship', icon: '🚢' },
        { word: 'bike', icon: '🚲' },
        { word: 'drum', icon: '🥁' },
        { word: 'horn', icon: '📯' },
        { word: 'flag', icon: '🚩' },
        { word: 'bomb', icon: '💣' },
        { word: 'kite', icon: '🪁' },
        { word: 'sock', icon: '🧦' },
        { word: 'coat', icon: '🧥' },
        { word: 'shoe', icon: '👟' },
        { word: 'boot', icon: '👢' },
        { word: 'baby', icon: '👶' },
        { word: 'king', icon: '🤴' },
        { word: 'girl', icon: '👧' },
        { word: 'boy', icon: '👦' },
        { word: 'clap', icon: '👏' },
        { word: 'pray', icon: '🙏' },
        { word: 'food', icon: '🍽️' },
        { word: 'meat', icon: '🍖' },
        { word: 'taco', icon: '🌮' },
        { word: 'rice', icon: '🍚' },
        { word: 'soup', icon: '🍜' },
        { word: 'corn', icon: '🌽' },
        { word: 'pear', icon: '🍐' },
        { word: 'lime', icon: '🍋' },
        { word: 'peach', icon: '🍑' },
        { word: 'plum', icon: '🪴' },
        { word: 'milk', icon: '🥛' },
        { word: 'leaf', icon: '🍃' },
        { word: 'rose', icon: '🌹' },
        { word: 'herb', icon: '🌿' },
        { word: 'rock', icon: '🪨' },
        { word: 'comet', icon: '☄️' },
        { word: 'cloud', icon: '☁️' },
        { word: 'storm', icon: '⛈️' },
        // 5 letters with icons
        { word: 'apple', icon: '🍎' },
        { word: 'happy', icon: '😊' },
        { word: 'smart', icon: '🧠' },
        { word: 'smile', icon: '😄' },
        { word: 'dance', icon: '💃' },
        { word: 'music', icon: '🎵' },
        { word: 'ocean', icon: '🌊' },
        { word: 'beach', icon: '🏖️' },
        { word: 'candy', icon: '🍬' },
        { word: 'pizza', icon: '🍕' },
        { word: 'tiger', icon: '🐯' },
        { word: 'horse', icon: '🐴' },
        { word: 'plane', icon: '✈️' },
        { word: 'train', icon: '🚂' },
        { word: 'house', icon: '🏠' },
        { word: 'heart', icon: '💖' },
        { word: 'zebra', icon: '🦓' },
        { word: 'camel', icon: '🐫' },
        { word: 'snake', icon: '🐍' },
        { word: 'mouse', icon: '🐭' },
        { word: 'sheep', icon: '🐑' },
        { word: 'goat', icon: '🐐' },
        { word: 'rhino', icon: '🦏' },
        { word: 'sloth', icon: '🦥' },
        { word: 'otter', icon: '🦦' },
        { word: 'eagle', icon: '🦅' },
        { word: 'crane', icon: '🦤' },
        { word: 'squid', icon: '🦑' },
        { word: 'shrimp', icon: '🦐' },
        { word: 'tulip', icon: '🌷' },
        { word: 'plant', icon: '🪴' },
        { word: 'earth', icon: '🌍' },
        { word: 'globe', icon: '🌎' },
        { word: 'world', icon: '🌏' },
        { word: 'space', icon: '🌌' },
        { word: 'comet', icon: '☄️' },
        { word: 'crown', icon: '👑' },
        { word: 'sword', icon: '⚔️' },
        { word: 'shield', icon: '🛡️' },
        { word: 'arrow', icon: '➡️' },
        { word: 'paint', icon: '🎨' },
        { word: 'watch', icon: '⌚' },
        { word: 'phone', icon: '📱' },
        { word: 'clock', icon: '⏰' },
        { word: 'radio', icon: '📻' },
        { word: 'movie', icon: '🎬' },
        { word: 'photo', icon: '📷' },
        { word: 'video', icon: '📹' },
        { word: 'angel', icon: '👼' },
        { word: 'fairy', icon: '🧚' },
        { word: 'ghost', icon: '👻' },
        { word: 'robot', icon: '🤖' },
        { word: 'alien', icon: '👽' },
        { word: 'mummy', icon: '🧟' },
        { word: 'witch', icon: '🧙' },
        { word: 'magic', icon: '✨' },
        { word: 'bread', icon: '🍞' },
        { word: 'bacon', icon: '🥓' },
        { word: 'salad', icon: '🥗' },
        { word: 'pasta', icon: '🍝' },
        { word: 'sushi', icon: '🍣' },
        { word: 'taco', icon: '🌮' },
        { word: 'donut', icon: '🍩' },
        { word: 'honey', icon: '🍯' },
        { word: 'mango', icon: '🥭' },
        { word: 'grape', icon: '🍇' },
        { word: 'melon', icon: '🍉' },
        { word: 'peach', icon: '🍑' },
        { word: 'lemon', icon: '🍋' },
        { word: 'berry', icon: '🫐' },
        { word: 'water', icon: '💧' },
        { word: 'juice', icon: '🧃' },
        { word: 'broom', icon: '🧹' },
        { word: 'towel', icon: '🧻' },
        { word: 'brush', icon: '🪥' },
        { word: 'chair', icon: '🪑' },
        { word: 'couch', icon: '🛋️' },
        { word: 'table', icon: '🪑' },
        { word: 'scarf', icon: '🧣' },
        { word: 'glove', icon: '🧤' },
        { word: 'shirt', icon: '👕' },
        { word: 'dress', icon: '👗' },
        { word: 'pants', icon: '👖' },
        { word: 'jeans', icon: '👖' },
        { word: 'purse', icon: '👛' },
        // More 3-letter words
        { word: 'bee', icon: '🐝' },
        { word: 'key', icon: '🔑' },
        { word: 'tea', icon: '🍵' },
        { word: 'bus', icon: '🚌' },
        { word: 'ant', icon: '🐜' },
        { word: 'cow', icon: '🐮' },
        { word: 'pig', icon: '🐷' },
        { word: 'owl', icon: '🦉' },
        { word: 'ice', icon: '🧊' },
        { word: 'jam', icon: '🍓' },
        { word: 'nut', icon: '🥜' },
        { word: 'web', icon: '🕸️' },
        { word: 'map', icon: '🗺️' },
        { word: 'eye', icon: '👁️' },
        { word: 'ear', icon: '👂' },
        { word: 'arm', icon: '💪' },
        { word: 'air', icon: '💨' },
        { word: 'sky', icon: '🌤️' },
        { word: 'sea', icon: '🌊' },
        { word: 'gem', icon: '💎' },
        { word: 'log', icon: '🪵' },
        { word: 'oak', icon: '🌳' },
        { word: 'tag', icon: '🏷️' },
        { word: 'zip', icon: '🤐' },
        { word: 'ink', icon: '🖋️' },
        { word: 'ape', icon: '🦍' },
        { word: 'dam', icon: '🦫' },
        { word: 'net', icon: '🥅' },
        { word: 'bay', icon: '🌊' },
        { word: 'dew', icon: '💧' },
        { word: 'fin', icon: '🦈' },
        { word: 'fog', icon: '🌫️' },
        { word: 'hay', icon: '🌾' },
        { word: 'ivy', icon: '🌿' },
        { word: 'jaw', icon: '🦷' },
        { word: 'kit', icon: '🧰' },
        { word: 'lap', icon: '🏁' },
        { word: 'mat', icon: '🧘' },
        { word: 'nap', icon: '😴' },
        { word: 'oar', icon: '🚣' },
        { word: 'orb', icon: '🔮' },
        { word: 'pad', icon: '📝' },
        { word: 'pan', icon: '🍳' },
        { word: 'paw', icon: '🐾' },
        { word: 'pod', icon: '🫛' },
        { word: 'pot', icon: '🍯' },
        { word: 'pub', icon: '🍺' },
        { word: 'rim', icon: '⭕' },
        { word: 'rod', icon: '🎣' },
        { word: 'row', icon: '🚣' },
        { word: 'sap', icon: '🌲' },
        { word: 'saw', icon: '🪚' },
        { word: 'spy', icon: '🕵️' },
        { word: 'tab', icon: '🗂️' },
        { word: 'tan', icon: '🟤' },
        { word: 'tap', icon: '🚰' },
        { word: 'tar', icon: '🛢️' },
        { word: 'tub', icon: '🛁' },
        { word: 'van', icon: '🚐' },
        { word: 'vet', icon: '👨‍⚕️' },
        { word: 'wax', icon: '🕯️' },
        { word: 'wig', icon: '💇' },
        { word: 'yak', icon: '🦬' },
        { word: 'yam', icon: '🍠' },
        { word: 'yen', icon: '💴' },
        { word: 'yes', icon: '✅' },
        { word: 'yin', icon: '☯️' },
        { word: 'zoo', icon: '🦁' },
        // More 4-letter words
        { word: 'frog', icon: '🐸' },
        { word: 'duck', icon: '🦆' },
        { word: 'crab', icon: '🦀' },
        { word: 'lion', icon: '🦁' },
        { word: 'deer', icon: '🦌' },
        { word: 'wolf', icon: '🐺' },
        { word: 'panda', icon: '🐼' },
        { word: 'koala', icon: '🐨' },
        { word: 'shark', icon: '🦈' },
        { word: 'whale', icon: '🐋' },
        { word: 'snail', icon: '🐌' },
        { word: 'fire', icon: '🔥' },
        { word: 'gift', icon: '🎁' },
        { word: 'ring', icon: '💍' },
        { word: 'bell', icon: '🔔' },
        { word: 'coin', icon: '🪙' },
        { word: 'lamp', icon: '💡' },
        { word: 'door', icon: '🚪' },
        { word: 'tent', icon: '⛺' },
        { word: 'boat', icon: '⛵' },
        { word: 'ship', icon: '🚢' },
        { word: 'bike', icon: '🚲' },
        { word: 'drum', icon: '🥁' },
        { word: 'horn', icon: '📯' },
        { word: 'flag', icon: '🚩' },
        { word: 'bomb', icon: '💣' },
        { word: 'kite', icon: '🪁' },
        { word: 'sock', icon: '🧦' },
        { word: 'coat', icon: '🧥' },
        { word: 'shoe', icon: '👟' },
        { word: 'boot', icon: '👢' },
        { word: 'baby', icon: '👶' },
        { word: 'king', icon: '🤴' },
        { word: 'girl', icon: '👧' },
        { word: 'boy', icon: '👦' },
        { word: 'clap', icon: '👏' },
        { word: 'pray', icon: '🙏' },
        { word: 'food', icon: '🍽️' },
        { word: 'meat', icon: '🍖' },
        { word: 'taco', icon: '🌮' },
        { word: 'rice', icon: '🍚' },
        { word: 'soup', icon: '🍜' },
        { word: 'corn', icon: '🌽' },
        { word: 'pear', icon: '🍐' },
        { word: 'lime', icon: '🍋' },
        { word: 'peach', icon: '🍑' },
        { word: 'plum', icon: '🪴' },
        { word: 'milk', icon: '🥛' },
        { word: 'leaf', icon: '🍃' },
        { word: 'rose', icon: '🌹' },
        { word: 'herb', icon: '🌿' },
        { word: 'rock', icon: '🪨' },
        { word: 'comet', icon: '☄️' },
        { word: 'cloud', icon: '☁️' },
        { word: 'storm', icon: '⛈️' },
        { word: 'seal', icon: '🦭' },
        { word: 'claw', icon: '🦞' },
        { word: 'hoof', icon: '🐴' },
        { word: 'wing', icon: '🦅' },
        { word: 'beak', icon: '🦜' },
        { word: 'nest', icon: '🪺' },
        { word: 'hive', icon: '🐝' },
        { word: 'cave', icon: '🕳️' },
        { word: 'reef', icon: '🐠' },
        { word: 'pool', icon: '🏊' },
        { word: 'pond', icon: '🦆' },
        { word: 'lake', icon: '🏞️' },
        { word: 'park', icon: '🏞️' },
        { word: 'yard', icon: '🏡' },
        { word: 'farm', icon: '🚜' },
        { word: 'barn', icon: '🏚️' },
        { word: 'shed', icon: '🏗️' },
        { word: 'wall', icon: '🧱' },
        { word: 'gate', icon: '🚧' },
        { word: 'path', icon: '🛤️' },
        { word: 'road', icon: '🛣️' },
        { word: 'town', icon: '🏘️' },
        { word: 'city', icon: '🌆' },
        { word: 'bank', icon: '🏦' },
        { word: 'shop', icon: '🏪' },
        { word: 'mall', icon: '🏬' },
        { word: 'cafe', icon: '☕' },
        { word: 'deli', icon: '🥪' },
        { word: 'taxi', icon: '🚕' },
        { word: 'jeep', icon: '🚙' },
        { word: 'tank', icon: '🚂' },
        { word: 'sail', icon: '⛵' },
        { word: 'raft', icon: '🛶' },
        { word: 'pier', icon: '🌉' },
        { word: 'port', icon: '⚓' },
        { word: 'dock', icon: '🚢' },
        { word: 'mast', icon: '⛵' },
        { word: 'helm', icon: '⚓' },
        { word: 'crew', icon: '👥' },
        { word: 'hero', icon: '🦸' },
        { word: 'zero', icon: '0️⃣' },
        { word: 'echo', icon: '📢' },
        { word: 'myth', icon: '🐉' },
        { word: 'saga', icon: '📖' },
        { word: 'tale', icon: '📚' },
        { word: 'poem', icon: '📝' },
        { word: 'song', icon: '🎵' },
        { word: 'tune', icon: '🎶' },
        { word: 'beat', icon: '🥁' },
        { word: 'jazz', icon: '🎷' },
        { word: 'rock', icon: '🎸' },
        { word: 'folk', icon: '🪕' },
        { word: 'gala', icon: '🎭' },
        { word: 'show', icon: '🎪' },
        { word: 'circus', icon: '🎪' },
        { word: 'film', icon: '🎬' },
        { word: 'cast', icon: '🎭' },
        { word: 'crew', icon: '🎥' },
        { word: 'lens', icon: '📷' },
        { word: 'zoom', icon: '🔍' },
        { word: 'snap', icon: '📸' },
        { word: 'shot', icon: '📷' },
        { word: 'view', icon: '👀' },
        { word: 'peek', icon: '👁️' },
        { word: 'look', icon: '👀' },
        { word: 'scan', icon: '🔎' },
        { word: 'spot', icon: '🔍' },
        { word: 'find', icon: '🔎' },
        { word: 'hunt', icon: '🔍' },
        { word: 'seek', icon: '🕵️' },
        { word: 'hide', icon: '🙈' },
        { word: 'peek', icon: '🙉' },
        { word: 'wait', icon: '⏳' },
        { word: 'stay', icon: '🏠' },
        { word: 'come', icon: '🚶' },
        { word: 'exit', icon: '🚪' },
        { word: 'push', icon: '👉' },
        { word: 'pull', icon: '👈' },
        { word: 'lift', icon: '🏋️' },
        { word: 'drop', icon: '⬇️' },
        { word: 'toss', icon: '🤾' },
        { word: 'pass', icon: '🏈' },
        { word: 'kick', icon: '⚽' },
        { word: 'punt', icon: '🏉' },
        { word: 'shot', icon: '🏀' },
        { word: 'dunk', icon: '🏀' },
        { word: 'goal', icon: '🥅' },
        { word: 'team', icon: '👥' },
        { word: 'game', icon: '🎮' },
        { word: 'quiz', icon: '❓' },
        { word: 'test', icon: '📝' },
        { word: 'exam', icon: '📄' },
        { word: 'math', icon: '🔢' },
        { word: 'plus', icon: '➕' },
        { word: 'less', icon: '➖' },
        { word: 'half', icon: '½' },
        { word: 'pair', icon: '👫' },
        { word: 'trio', icon: '3️⃣' },
        { word: 'quad', icon: '4️⃣' },
        { word: 'five', icon: '5️⃣' },
        { word: 'size', icon: '📏' },
        { word: 'tall', icon: '📏' },
        { word: 'high', icon: '⬆️' },
        { word: 'deep', icon: '⬇️' },
        { word: 'wide', icon: '↔️' },
        { word: 'long', icon: '➡️' },
        { word: 'fast', icon: '💨' },
        { word: 'slow', icon: '🐌' },
        { word: 'warm', icon: '🌡️' },
        { word: 'cool', icon: '❄️' },
        { word: 'hot', icon: '🔥' },
        { word: 'cold', icon: '🧊' },
        { word: 'soft', icon: '🧸' },
        { word: 'hard', icon: '🪨' },
        { word: 'loud', icon: '🔊' },
        { word: 'calm', icon: '😌' },
        { word: 'wild', icon: '🦁' },
        { word: 'tame', icon: '🐕' },
        { word: 'bold', icon: '💪' },
        { word: 'shy', icon: '🙈' },
        { word: 'kind', icon: '💝' },
        { word: 'rude', icon: '😤' },
        { word: 'good', icon: '👍' },
        { word: 'evil', icon: '😈' },
        { word: 'pure', icon: '✨' },
        { word: 'dark', icon: '🌑' },
        { word: 'dawn', icon: '🌅' },
        { word: 'dusk', icon: '🌆' },
        { word: 'noon', icon: '☀️' },
        { word: 'week', icon: '📅' },
        { word: 'year', icon: '🗓️' },
        { word: 'past', icon: '⏮️' },
        { word: 'next', icon: '⏭️' },
        { word: 'soon', icon: '⏰' },
        { word: 'late', icon: '🕐' },
        { word: 'time', icon: '⏰' },
        { word: 'date', icon: '📅' },
        { word: 'hour', icon: '🕐' },
        { word: 'tick', icon: '⏱️' },
        { word: 'tone', icon: '🔔' },
        { word: 'beep', icon: '📢' },
        { word: 'buzz', icon: '📳' },
        { word: 'honk', icon: '📯' },
        { word: 'bark', icon: '🐕' },
        { word: 'meow', icon: '🐱' },
        { word: 'roar', icon: '🦁' },
        { word: 'hiss', icon: '🐍' },
        { word: 'purr', icon: '😺' },
        { word: 'moo', icon: '🐮' },
        { word: 'oink', icon: '🐷' },
        { word: 'crow', icon: '🐓' },
        { word: 'hoot', icon: '🦉' },
        { word: 'chirp', icon: '🐦' },
        { word: 'quack', icon: '🦆' },
        { word: 'baa', icon: '🐑' },
        { word: 'neigh', icon: '🐴' },
        // More 5-letter words
        { word: 'zebra', icon: '🦓' },
        { word: 'camel', icon: '🐫' },
        { word: 'snake', icon: '🐍' },
        { word: 'mouse', icon: '🐭' },
        { word: 'sheep', icon: '🐑' },
        { word: 'goat', icon: '🐐' },
        { word: 'rhino', icon: '🦏' },
        { word: 'sloth', icon: '🦥' },
        { word: 'otter', icon: '🦦' },
        { word: 'eagle', icon: '🦅' },
        { word: 'crane', icon: '🦤' },
        { word: 'squid', icon: '🦑' },
        { word: 'shrimp', icon: '🦐' },
        { word: 'tulip', icon: '🌷' },
        { word: 'plant', icon: '🪴' },
        { word: 'earth', icon: '🌍' },
        { word: 'globe', icon: '🌎' },
        { word: 'world', icon: '🌏' },
        { word: 'space', icon: '🌌' },
        { word: 'comet', icon: '☄️' },
        { word: 'crown', icon: '👑' },
        { word: 'sword', icon: '⚔️' },
        { word: 'shield', icon: '🛡️' },
        { word: 'arrow', icon: '➡️' },
        { word: 'paint', icon: '🎨' },
        { word: 'watch', icon: '⌚' },
        { word: 'phone', icon: '📱' },
        { word: 'clock', icon: '⏰' },
        { word: 'radio', icon: '📻' },
        { word: 'movie', icon: '🎬' },
        { word: 'photo', icon: '📷' },
        { word: 'video', icon: '📹' },
        { word: 'angel', icon: '👼' },
        { word: 'fairy', icon: '🧚' },
        { word: 'ghost', icon: '👻' },
        { word: 'robot', icon: '🤖' },
        { word: 'alien', icon: '👽' },
        { word: 'mummy', icon: '🧟' },
        { word: 'witch', icon: '🧙' },
        { word: 'magic', icon: '✨' },
        { word: 'bread', icon: '🍞' },
        { word: 'bacon', icon: '🥓' },
        { word: 'salad', icon: '🥗' },
        { word: 'pasta', icon: '🍝' },
        { word: 'sushi', icon: '🍣' },
        { word: 'taco', icon: '🌮' },
        { word: 'donut', icon: '🍩' },
        { word: 'honey', icon: '🍯' },
        { word: 'mango', icon: '🥭' },
        { word: 'grape', icon: '🍇' },
        { word: 'melon', icon: '🍉' },
        { word: 'peach', icon: '🍑' },
        { word: 'lemon', icon: '🍋' },
        { word: 'berry', icon: '🫐' },
        { word: 'water', icon: '💧' },
        { word: 'juice', icon: '🧃' },
        { word: 'broom', icon: '🧹' },
        { word: 'towel', icon: '🧻' },
        { word: 'brush', icon: '🪥' },
        { word: 'chair', icon: '🪑' },
        { word: 'couch', icon: '🛋️' },
        { word: 'table', icon: '🪑' },
        { word: 'scarf', icon: '🧣' },
        { word: 'glove', icon: '🧤' },
        { word: 'shirt', icon: '👕' },
        { word: 'dress', icon: '👗' },
        { word: 'pants', icon: '👖' },
        { word: 'jeans', icon: '👖' },
        { word: 'purse', icon: '👛' },
        { word: 'moose', icon: '🫎' },
        { word: 'bison', icon: '🦬' },
        { word: 'hyena', icon: '🐕' },
        { word: 'panda', icon: '🐼' },
        { word: 'lemur', icon: '🐒' },
        { word: 'skunk', icon: '🦨' },
        { word: 'meerkat', icon: '🦡' },
        { word: 'orca', icon: '🐋' },
        { word: 'coral', icon: '🪸' },
        { word: 'pearl', icon: '🦪' },
        { word: 'shell', icon: '🐚' },
        { word: 'scale', icon: '🐟' },
        { word: 'spine', icon: '🦔' },
        { word: 'pouch', icon: '🦘' },
        { word: 'trunk', icon: '🐘' },
        { word: 'snout', icon: '🐽' },
        { word: 'muzzle', icon: '🐕' },
        { word: 'antler', icon: '🦌' },
        { word: 'quill', icon: '🦔' },
        { word: 'fang', icon: '🐍' },
        { word: 'venom', icon: '🦂' },
        { word: 'talon', icon: '🦅' },
        { word: 'feather', icon: '🪶' },
        { word: 'petal', icon: '🌸' },
        { word: 'bloom', icon: '🌺' },
        { word: 'fruit', icon: '🍎' },
        { word: 'seeds', icon: '🌱' },
        { word: 'roots', icon: '🌿' },
        { word: 'stump', icon: '🪵' },
        { word: 'twig', icon: '🌿' },
        { word: 'grove', icon: '🌳' },
        { word: 'woods', icon: '🌲' },
        { word: 'brush', icon: '🌿' },
        { word: 'marsh', icon: '🦆' },
        { word: 'swamp', icon: '🐊' },
        { word: 'delta', icon: '🌊' },
        { word: 'shore', icon: '🏖️' },
        { word: 'cliff', icon: '🏔️' },
        { word: 'ridge', icon: '⛰️' },
        { word: 'slope', icon: '⛷️' },
        { word: 'peaks', icon: '🏔️' },
        { word: 'crest', icon: '🌊' },
        { word: 'waves', icon: '🌊' },
        { word: 'tides', icon: '🌊' },
        { word: 'froth', icon: '🌊' },
        { word: 'spray', icon: '💦' },
        { word: 'steam', icon: '♨️' },
        { word: 'frost', icon: '❄️' },
        { word: 'chill', icon: '🥶' },
        { word: 'blaze', icon: '🔥' },
        { word: 'flame', icon: '🔥' },
        { word: 'spark', icon: '✨' },
        { word: 'glow', icon: '💡' },
        { word: 'shine', icon: '✨' },
        { word: 'flash', icon: '⚡' },
        { word: 'gleam', icon: '✨' },
        { word: 'twinkle', icon: '✨' },
        { word: 'shade', icon: '🌳' },
        { word: 'light', icon: '💡' },
        { word: 'neon', icon: '🌟' },
        { word: 'prism', icon: '🌈' },
        { word: 'color', icon: '🎨' },
        { word: 'azure', icon: '🔵' },
        { word: 'amber', icon: '🟠' },
        { word: 'coral', icon: '🪸' },
        { word: 'ivory', icon: '⚪' },
        { word: 'olive', icon: '🫒' },
        { word: 'pearl', icon: '⚪' },
        { word: 'slate', icon: '⬛' },
        { word: 'brass', icon: '🟡' },
        { word: 'chalk', icon: '⚪' },
        { word: 'paint', icon: '🎨' },
        { word: 'tints', icon: '🎨' },
        { word: 'shade', icon: '🎨' },
        { word: 'hue', icon: '🌈' },
        { word: 'canvas', icon: '🖼️' },
        { word: 'easel', icon: '🎨' },
        { word: 'mural', icon: '🎨' },
        { word: 'sketch', icon: '✏️' },
        { word: 'draft', icon: '📝' },
        { word: 'trace', icon: '📝' },
        { word: 'scrawl', icon: '✍️' },
        { word: 'doodle', icon: '✏️' },
        { word: 'craft', icon: '✂️' },
        { word: 'build', icon: '🔨' },
        { word: 'forge', icon: '⚒️' },
        { word: 'mould', icon: '🏺' },
        { word: 'shape', icon: '🔷' },
        { word: 'twist', icon: '🌀' },
        { word: 'bend', icon: '↩️' },
        { word: 'curve', icon: '〰️' },
        { word: 'angle', icon: '📐' },
        { word: 'point', icon: '👉' },
        { word: 'lines', icon: '➖' },
        { word: 'edges', icon: '📐' },
        { word: 'faces', icon: '🔷' },
        { word: 'sides', icon: '🔲' },
        { word: 'round', icon: '⭕' },
        { word: 'oval', icon: '🥚' },
        { word: 'square', icon: '🟦' },
        { word: 'cube', icon: '🧊' },
        { word: 'cone', icon: '🍦' },
        { word: 'cylinder', icon: '🥫' },
        { word: 'sphere', icon: '⚽' },
        { word: 'prism', icon: '🔶' },
        { word: 'wedge', icon: '🧀' },
        { word: 'slice', icon: '🍕' },
        { word: 'piece', icon: '🧩' },
        { word: 'chunk', icon: '🧊' },
        { word: 'crumb', icon: '🍞' },
        { word: 'shard', icon: '💎' },
        { word: 'scrap', icon: '🗑️' },
        { word: 'waste', icon: '♻️' },
        { word: 'trash', icon: '🗑️' },
        { word: 'junk', icon: '🗑️' },
        { word: 'clean', icon: '✨' },
        { word: 'fresh', icon: '🌿' },
        { word: 'crisp', icon: '🥖' },
        { word: 'sweet', icon: '🍭' },
        { word: 'sour', icon: '🍋' },
        { word: 'spicy', icon: '🌶️' },
        { word: 'salty', icon: '🧂' },
        { word: 'bland', icon: '🍚' },
        { word: 'tasty', icon: '😋' },
        { word: 'yummy', icon: '😋' },
        { word: 'gross', icon: '🤢' },
        { word: 'stale', icon: '🍞' },
        { word: 'rotten', icon: '🤢' },
        { word: 'moldy', icon: '🦠' },
        { word: 'germ', icon: '🦠' },
        { word: 'virus', icon: '🦠' },
        { word: 'cough', icon: '🤧' },
        { word: 'sneeze', icon: '🤧' },
        { word: 'fever', icon: '🤒' },
        { word: 'ache', icon: '🤕' },
        { word: 'sore', icon: '🩹' },
        { word: 'bruise', icon: '🩹' },
        { word: 'wound', icon: '🩹' },
        { word: 'scar', icon: '🩹' },
        { word: 'heal', icon: '💊' },
        { word: 'pills', icon: '💊' },
        { word: 'drugs', icon: '💉' },
        { word: 'nurse', icon: '👩‍⚕️' },
        { word: 'clinic', icon: '🏥' },
        { word: 'health', icon: '💚' },
        { word: 'fit', icon: '💪' },
        { word: 'energy', icon: '⚡' },
        { word: 'power', icon: '⚡' },
        { word: 'force', icon: '💥' },
        { word: 'might', icon: '💪' },
        { word: 'strength', icon: '💪' },
        { word: 'muscle', icon: '💪' },
        { word: 'bones', icon: '🦴' },
        { word: 'skull', icon: '💀' },
        { word: 'spine', icon: '🦴' },
        { word: 'ribs', icon: '🦴' },
        { word: 'joint', icon: '🦴' },
        { word: 'elbow', icon: '💪' },
        { word: 'wrist', icon: '🤚' },
        { word: 'ankle', icon: '🦶' },
        { word: 'knees', icon: '🦵' },
        { word: 'toes', icon: '🦶' },
        { word: 'heels', icon: '👠' },
        { word: 'soles', icon: '👟' },
        { word: 'thumb', icon: '👍' },
        { word: 'palms', icon: '🤲' },
        { word: 'nails', icon: '💅' },
        { word: 'chin', icon: '😊' },
        { word: 'cheek', icon: '😊' },
        { word: 'forehead', icon: '😊' },
        { word: 'brows', icon: '🤨' },
        { word: 'lashes', icon: '👁️' },
        { word: 'pupil', icon: '👁️' },
        { word: 'iris', icon: '👁️' },
        { word: 'sight', icon: '👀' },
        { word: 'sound', icon: '🔊' },
        { word: 'smell', icon: '👃' },
        { word: 'taste', icon: '👅' },
        { word: 'touch', icon: '👆' },
        { word: 'sense', icon: '🧠' },
        { word: 'think', icon: '🤔' },
        { word: 'dream', icon: '💭' },
        { word: 'sleep', icon: '😴' },
        { word: 'awake', icon: '👁️' },
        { word: 'yawn', icon: '🥱' },
        { word: 'tired', icon: '😴' },
        { word: 'rest', icon: '😌' },
        { word: 'relax', icon: '😌' },
        { word: 'peace', icon: '☮️' },
        { word: 'quiet', icon: '🤫' },
        { word: 'hush', icon: '🤫' },
        { word: 'still', icon: '🧘' },
        { word: 'pause', icon: '⏸️' },
        { word: 'stops', icon: '🛑' },
        { word: 'brake', icon: '🚦' },
        { word: 'yield', icon: '⚠️' },
        { word: 'merge', icon: '🔀' },
        { word: 'split', icon: '✂️' },
        { word: 'cross', icon: '✝️' },
        { word: 'paths', icon: '🛤️' },
        { word: 'roads', icon: '🛣️' },
        { word: 'route', icon: '🗺️' },
        { word: 'trips', icon: '🧳' },
        { word: 'tours', icon: '🗺️' },
        { word: 'visit', icon: '🚶' },
        { word: 'guest', icon: '🎩' },
        { word: 'hosts', icon: '🏠' },
        { word: 'party', icon: '🎉' },
        { word: 'event', icon: '📅' }
    ],
    intermediate: [
        // 6 letters with icons
        { word: 'dragon', icon: '🐉' },
        { word: 'rocket', icon: '🚀' },
        { word: 'castle', icon: '🏰' },
        { word: 'friend', icon: '👫' },
        { word: 'flower', icon: '🌸' },
        { word: 'button', icon: '🔘' },
        { word: 'cookie', icon: '🍪' },
        { word: 'jungle', icon: '🌴' },
        { word: 'monkey', icon: '🐵' },
        { word: 'purple', icon: '💜' },
        { word: 'yellow', icon: '💛' },
        { word: 'orange', icon: '🍊' },
        { word: 'winter', icon: '⛄' },
        { word: 'summer', icon: '🌞' },
        { word: 'spring', icon: '🌷' },
        { word: 'autumn', icon: '🍂' },
        { word: 'forest', icon: '🌳' },
        { word: 'island', icon: '🏝️' },
        { word: 'pirate', icon: '🏴‍☠️' },
        { word: 'wizard', icon: '🧙' },
        { word: 'magics', icon: '✨' },
        { word: 'turtle', icon: '🐢' },
        { word: 'rabbit', icon: '🐰' },
        { word: 'hamster', icon: '🐹' },
        { word: 'lizard', icon: '🦎' },
        { word: 'spider', icon: '🕷️' },
        { word: 'parrot', icon: '🦜' },
        { word: 'peacock', icon: '🦚' },
        { word: 'flamingo', icon: '🦩' },
        { word: 'turkey', icon: '🦃' },
        { word: 'chicken', icon: '🐔' },
        { word: 'rooster', icon: '🐓' },
        { word: 'oyster', icon: '🦪' },
        { word: 'lobster', icon: '🦞' },
        { word: 'planet', icon: '🪐' },
        { word: 'saturn', icon: '🪐' },
        { word: 'meteor', icon: '☄️' },
        { word: 'clouds', icon: '☁️' },
        { word: 'sunset', icon: '🌅' },
        { word: 'cherry', icon: '🍒' },
        { word: 'banana', icon: '🍌' },
        { word: 'tomato', icon: '🍅' },
        { word: 'potato', icon: '🥔' },
        { word: 'carrot', icon: '🥕' },
        { word: 'pepper', icon: '🌶️' },
        { word: 'garlic', icon: '🧄' },
        { word: 'onions', icon: '🧅' },
        { word: 'cheese', icon: '🧀' },
        { word: 'butter', icon: '🧈' },
        { word: 'waffle', icon: '🧇' },
        { word: 'hotdog', icon: '🌭' },
        { word: 'burger', icon: '🍔' },
        { word: 'french', icon: '🍟' },
        { word: 'pretzel', icon: '🥨' },
        { word: 'bagels', icon: '🥯' },
        { word: 'bottle', icon: '🍼' },
        { word: 'teapot', icon: '🫖' },
        { word: 'guitar', icon: '🎸' },
        { word: 'violin', icon: '🎻' },
        { word: 'trophy', icon: '🏆' },
        { word: 'soccer', icon: '⚽' },
        { word: 'basket', icon: '🏀' },
        { word: 'tennis', icon: '🎾' },
        { word: 'boxing', icon: '🥊' },
        { word: 'skiing', icon: '⛷️' },
        { word: 'hammer', icon: '🔨' },
        { word: 'wrench', icon: '🔧' },
        { word: 'magnet', icon: '🧲' },
        { word: 'ladder', icon: '🪜' },
        { word: 'bucket', icon: '🪣' },
        { word: 'baskets', icon: '🧺' },
        { word: 'candle', icon: '🕯️' },
        { word: 'toilet', icon: '🚽' },
        { word: 'shower', icon: '🚿' },
        { word: 'window', icon: '🪟' },
        { word: 'mirror', icon: '🪞' },
        { word: 'pillow', icon: '🛏️' },
        { word: 'cactus', icon: '🌵' },
        { word: 'bamboo', icon: '🎋' },
        { word: 'clover', icon: '🍀' },
        { word: 'farmer', icon: '🧑‍🌾' },
        { word: 'doctor', icon: '👨‍⚕️' },
        { word: 'police', icon: '👮' },
        { word: 'artist', icon: '🧑‍🎨' },
        { word: 'singer', icon: '🧑‍🎤' },
        { word: 'dancer', icon: '💃' },
        { word: 'jokers', icon: '🃏' },
        { word: 'clowns', icon: '🤡' },
        { word: 'ninjas', icon: '🥷' },
        { word: 'zombie', icon: '🧟' },
        { word: 'genies', icon: '🧞' },
        { word: 'elves', icon: '🧝' },
        { word: 'santas', icon: '🎅' },
        { word: 'cupids', icon: '💘' },
        { word: 'attack', icon: '⚔️' },
        { word: 'defend', icon: '🛡️' },
        { word: 'battle', icon: '⚔️' },
        { word: 'rescue', icon: '🦸' },
        { word: 'heroes', icon: '🦸' },
        { word: 'leader', icon: '👑' },
        { word: 'member', icon: '👤' },
        { word: 'people', icon: '👥' },
        { word: 'family', icon: '👨‍👩‍👧‍👦' },
        { word: 'parent', icon: '👨‍👩‍👧' },
        { word: 'mother', icon: '👩' },
        { word: 'father', icon: '👨' },
        { word: 'sister', icon: '👧' },
        { word: 'brother', icon: '👦' },
        { word: 'babies', icon: '👶' },
        { word: 'nephew', icon: '👦' },
        { word: 'cousin', icon: '👧' },
        { word: 'uncles', icon: '👨' },
        { word: 'aunts', icon: '👩' },
        { word: 'grands', icon: '👴' },
        { word: 'senior', icon: '👵' },
        { word: 'junior', icon: '👶' },
        { word: 'student', icon: '🎓' },
        { word: 'teacher', icon: '👨‍🏫' },
        { word: 'school', icon: '🏫' },
        { word: 'campus', icon: '🏛️' },
        { word: 'office', icon: '🏢' },
        { word: 'worker', icon: '👷' },
        { word: 'manage', icon: '👔' },
        { word: 'helper', icon: '🤝' },
        { word: 'assist', icon: '🆘' },
        { word: 'supply', icon: '📦' },
        { word: 'demand', icon: '📈' },
        { word: 'market', icon: '🏪' },
        { word: 'buyer', icon: '🛒' },
        { word: 'seller', icon: '💰' },
        { word: 'money', icon: '💵' },
        { word: 'wallet', icon: '👛' },
        { word: 'pocket', icon: '🎒' },
        { word: 'saving', icon: '💰' },
        { word: 'budget', icon: '💵' },
        { word: 'income', icon: '💸' },
        { word: 'profit', icon: '📈' },
        { word: 'growth', icon: '📊' },
        { word: 'change', icon: '🔄' },
        { word: 'update', icon: '🆕' },
        { word: 'upload', icon: '⬆️' },
        { word: 'online', icon: '🌐' },
        { word: 'search', icon: '🔍' },
        { word: 'browse', icon: '🌐' },
        { word: 'email', icon: '📧' },
        { word: 'message', icon: '💬' },
        { word: 'signal', icon: '📶' },
        { word: 'mobile', icon: '📱' },
        { word: 'tablet', icon: '📱' },
        { word: 'laptop', icon: '💻' },
        { word: 'screen', icon: '🖥️' },
        { word: 'button', icon: '🔘' },
        { word: 'volume', icon: '🔊' },
        { word: 'muted', icon: '🔇' },
        { word: 'record', icon: '⏺️' },
        { word: 'replay', icon: '🔁' },
        { word: 'repeat', icon: '🔂' },
        { word: 'random', icon: '🔀' },
        { word: 'shuffle', icon: '🔀' },
        { word: 'select', icon: '☑️' },
        { word: 'choice', icon: '✅' },
        { word: 'option', icon: '⚙️' },
        { word: 'prefer', icon: '⭐' },
        { word: 'flavor', icon: '🍦' },
        { word: 'season', icon: '🌸' },
        { word: 'months', icon: '📅' },
        { word: 'weekday', icon: '📆' },
        { word: 'monday', icon: '1️⃣' },
        { word: 'friday', icon: '5️⃣' },
        { word: 'sunday', icon: '☀️' },
        { word: 'moment', icon: '⏱️' },
        { word: 'second', icon: '⏱️' },
        { word: 'minute', icon: '⏲️' },
        { word: 'period', icon: '⏰' },
        { word: 'always', icon: '♾️' },
        { word: 'rarely', icon: '🌙' },
        { word: 'never', icon: '🚫' },
        { word: 'often', icon: '🔄' },
        { word: 'usually', icon: '✔️' },
        { word: 'normal', icon: '😐' },
        { word: 'common', icon: '👥' },
        { word: 'unique', icon: '💎' },
        { word: 'special', icon: '✨' },
        { word: 'simple', icon: '⭕' },
        { word: 'tricky', icon: '🤹' },
        { word: 'clever', icon: '🧠' },
        { word: 'genius', icon: '💡' },
        { word: 'stupid', icon: '🤪' },
        { word: 'silly', icon: '🤡' },
        { word: 'funny', icon: '😂' },
        { word: 'jokes', icon: '😆' },
        { word: 'riddle', icon: '❓' },
        { word: 'puzzle', icon: '🧩' },
        { word: 'secret', icon: '🤫' },
        { word: 'hidden', icon: '👁️' },
        { word: 'reveal', icon: '🎭' },
        { word: 'expose', icon: '💡' },
        { word: 'uncover', icon: '🔍' },
        { word: 'notice', icon: '👀' },
        { word: 'ignore', icon: '🙈' },
        { word: 'listen', icon: '👂' },
        { word: 'silent', icon: '🤫' },
        { word: 'noises', icon: '🔊' },
        { word: 'shouts', icon: '📢' },
        { word: 'whisper', icon: '🤫' },
        { word: 'speaks', icon: '🗣️' },
        { word: 'talks', icon: '💬' },
        { word: 'chats', icon: '💭' },
        { word: 'debate', icon: '🗣️' },
        { word: 'argues', icon: '🤬' },
        { word: 'fights', icon: '🥊' },
        { word: 'boxing', icon: '🥊' },
        { word: 'karate', icon: '🥋' },
        { word: 'judo', icon: '🥋' },
        { word: 'sports', icon: '⚽' },
        { word: 'games', icon: '🎮' },
        { word: 'hobbies', icon: '🎨' },
        { word: 'crafts', icon: '✂️' },
        { word: 'skills', icon: '💪' },
        { word: 'talent', icon: '⭐' },
        { word: 'expert', icon: '🎓' },
        { word: 'master', icon: '👑' },
        { word: 'rookie', icon: '🆕' },
        { word: 'novice', icon: '🌱' },
        { word: 'begins', icon: '▶️' },
        { word: 'starts', icon: '🏁' },
        { word: 'finish', icon: '🏁' },
        { word: 'ending', icon: '🔚' },
        { word: 'closes', icon: '🚪' },
        { word: 'opens', icon: '🔓' },
        { word: 'locked', icon: '🔒' },
        { word: 'safety', icon: '🦺' },
        { word: 'danger', icon: '⚠️' },
        { word: 'hazard', icon: '☢️' },
        { word: 'caution', icon: '⚠️' },
        { word: 'alerts', icon: '🚨' },
        { word: 'alarms', icon: '⏰' },
        { word: 'sirens', icon: '🚨' },
        { word: 'rescue', icon: '🚁' },
        { word: 'saving', icon: '🦸' },
        { word: 'guards', icon: '💂' },
        { word: 'shield', icon: '🛡️' },
        { word: 'armors', icon: '🛡️' },
        { word: 'helmet', icon: '⛑️' },
        { word: 'gloves', icon: '🧤' },
        { word: 'boots', icon: '👢' },
        { word: 'uniform', icon: '👔' },
        { word: 'costume', icon: '🎭' },
        { word: 'outfit', icon: '👗' },
        { word: 'fashion', icon: '👠' },
        { word: 'styles', icon: '💅' },
        { word: 'trends', icon: '📈' },
        { word: 'modern', icon: '🆕' },
        { word: 'vintage', icon: '📻' },
        { word: 'retro', icon: '🕹️' },
        { word: 'classic', icon: '🎩' },
        { word: 'timeless', icon: '⏳' },
        { word: 'forever', icon: '♾️' },
        { word: 'eternal', icon: '💍' },
        { word: 'endless', icon: '∞' },
        { word: 'limits', icon: '🚧' },
        { word: 'bounds', icon: '🔲' },
        { word: 'border', icon: '🚧' },
        { word: 'edges', icon: '📐' },
        { word: 'corner', icon: '📐' },
        { word: 'center', icon: '🎯' },
        { word: 'middle', icon: '⏸️' },
        { word: 'inside', icon: '📥' },
        { word: 'outside', icon: '📤' },
        { word: 'nearby', icon: '📍' },
        { word: 'faraway', icon: '🌍' },
        { word: 'beyond', icon: '🌌' },
        { word: 'across', icon: '🌉' },
        { word: 'around', icon: '🔄' },
        { word: 'beside', icon: '↔️' },
        { word: 'behind', icon: '⬅️' },
        { word: 'before', icon: '⏮️' },
        { word: 'after', icon: '⏭️' },
        { word: 'during', icon: '⏸️' },
        { word: 'within', icon: '📦' },
        { word: 'without', icon: '❌' },
        { word: 'toward', icon: '➡️' },
        { word: 'against', icon: '🚫' },
        { word: 'between', icon: '↔️' },
        { word: 'through', icon: '🚇' },
        { word: 'tunnel', icon: '🚇' },
        { word: 'bridge', icon: '🌉' },
        { word: 'rivers', icon: '🌊' },
        { word: 'streams', icon: '💧' },
        { word: 'creeks', icon: '🏞️' },
        { word: 'canyon', icon: '🏜️' },
        { word: 'valley', icon: '🏞️' },
        { word: 'desert', icon: '🏜️' },
        { word: 'oasis', icon: '🌴' },
        { word: 'plains', icon: '🌾' },
        { word: 'meadow', icon: '🌼' },
        { word: 'fields', icon: '🌾' },
        { word: 'garden', icon: '🌺' },
        { word: 'orchard', icon: '🍎' },
        { word: 'vineyard', icon: '🍇' },
        { word: 'farming', icon: '🚜' },
        { word: 'planting', icon: '🌱' },
        { word: 'harvest', icon: '🌾' },
        { word: 'reaping', icon: '🌾' },
        { word: 'gather', icon: '🧺' },
        { word: 'collect', icon: '📦' },
        { word: 'sorting', icon: '🗂️' },
        { word: 'packing', icon: '📦' },
        { word: 'storing', icon: '🏪' },
        { word: 'keeping', icon: '🔐' },
        { word: 'holding', icon: '🤲' },
        { word: 'grasps', icon: '✊' },
        { word: 'grabs', icon: '👊' },
        { word: 'catches', icon: '🤾' },
        { word: 'throws', icon: '🤾' },
        { word: 'pitches', icon: '⚾' },
        { word: 'serves', icon: '🎾' },
        { word: 'bounces', icon: '⚽' },
        { word: 'dribble', icon: '🏀' },
        { word: 'shoots', icon: '🏹' },
        { word: 'scores', icon: '🎯' },
        { word: 'winning', icon: '🏆' },
        { word: 'victory', icon: '🎖️' },
        { word: 'success', icon: '✅' },
        { word: 'failure', icon: '❌' },
        { word: 'defeat', icon: '😞' },
        { word: 'loser', icon: '😢' },
        { word: 'winner', icon: '🥇' },
        { word: 'champ', icon: '🏆' },
        { word: 'medals', icon: '🥇' },
        { word: 'awards', icon: '🏅' },
        { word: 'prizes', icon: '🎁' },
        { word: 'reward', icon: '🎖️' },
        { word: 'bonus', icon: '💰' },
        { word: 'extras', icon: '➕' },
        { word: 'addons', icon: '🔗' },
        { word: 'plugins', icon: '🔌' },
        { word: 'modules', icon: '🧩' },
        { word: 'system', icon: '⚙️' },
        { word: 'machine', icon: '🤖' },
        { word: 'engine', icon: '🔧' },
        { word: 'motors', icon: '⚙️' },
        { word: 'wheels', icon: '🛞' },
        { word: 'axles', icon: '⚙️' },
        { word: 'gears', icon: '⚙️' },
        { word: 'chains', icon: '⛓️' },
        { word: 'ropes', icon: '🪢' },
        { word: 'cables', icon: '🔌' },
        { word: 'wires', icon: '🔌' },
        { word: 'plugs', icon: '🔌' },
        { word: 'sockets', icon: '🔌' },
        { word: 'outlets', icon: '🔌' },
        { word: 'switch', icon: '🔀' },
        { word: 'toggle', icon: '🔘' },
        { word: 'slider', icon: '🎚️' },
        { word: 'knobs', icon: '🎛️' },
        { word: 'dials', icon: '☎️' },
        { word: 'meters', icon: '📏' },
        { word: 'gauges', icon: '⏱️' },
        { word: 'scales', icon: '⚖️' },
        { word: 'measure', icon: '📏' },
        { word: 'weight', icon: '⚖️' },
        { word: 'heavy', icon: '🏋️' },
        { word: 'light', icon: '🪶' },
        { word: 'bright', icon: '💡' },
        { word: 'shiny', icon: '✨' },
        { word: 'glossy', icon: '✨' },
        { word: 'matte', icon: '⬜' },
        { word: 'smooth', icon: '🧊' },
        { word: 'rough', icon: '🪨' },
        { word: 'bumpy', icon: '🏔️' },
        { word: 'ridges', icon: '⛰️' },
        { word: 'grooves', icon: '📀' },
        { word: 'tracks', icon: '🛤️' },
        { word: 'trails', icon: '🥾' },
        { word: 'routes', icon: '🗺️' },
        { word: 'voyage', icon: '🚢' },
        { word: 'journey', icon: '🧳' },
        { word: 'travels', icon: '✈️' },
        { word: 'flights', icon: '✈️' },
        { word: 'riding', icon: '🚴' },
        { word: 'driving', icon: '🚗' },
        { word: 'cruising', icon: '🚢' },
        { word: 'explore', icon: '🗺️' },
        { word: 'discover', icon: '🔍' },
        { word: 'unearth', icon: '⛏️' },
        { word: 'digging', icon: '⛏️' },
        { word: 'mining', icon: '⛏️' },
        { word: 'tunnels', icon: '🚇' },
        { word: 'shafts', icon: '🕳️' },
        { word: 'holes', icon: '🕳️' },
        { word: 'caves', icon: '🦇' },
        { word: 'cavern', icon: '🏔️' },
        { word: 'grottos', icon: '🌊' },
        { word: 'depths', icon: '⬇️' },
        { word: 'abyss', icon: '🕳️' },
        { word: 'bottom', icon: '⬇️' },
        { word: 'floors', icon: '🏢' },
        { word: 'ceilings', icon: '🏠' },
        { word: 'roofs', icon: '🏠' },
        { word: 'attics', icon: '🏠' },
        { word: 'basements', icon: '🏚️' },
        { word: 'garages', icon: '🚗' },
        { word: 'driveways', icon: '🚗' },
        { word: 'parking', icon: '🅿️' },
        { word: 'station', icon: '🚉' },
        { word: 'airport', icon: '✈️' },
        { word: 'seaport', icon: '⚓' },
        { word: 'harbor', icon: '⚓' },
        { word: 'marina', icon: '⛵' },
        { word: 'docks', icon: '🚢' },
        { word: 'wharfs', icon: '🏗️' },
        { word: 'piers', icon: '🌉' },
        { word: 'jetty', icon: '🌊' },
        { word: 'breakwater', icon: '🌊' },
        { word: 'lighthouse', icon: '🗼' },
        { word: 'beacon', icon: '🔦' },
        { word: 'signals', icon: '🚦' },
        { word: 'signs', icon: '🪧' },
        { word: 'symbols', icon: '♾️' },
        { word: 'icons', icon: '🎨' },
        { word: 'images', icon: '🖼️' },
        { word: 'pictures', icon: '🖼️' },
        { word: 'photos', icon: '📷' },
        { word: 'snapshots', icon: '📸' },
        { word: 'portraits', icon: '🖼️' },
        { word: 'selfies', icon: '🤳' },
        { word: 'groupshot', icon: '👥' },
        { word: 'panorama', icon: '🌄' },
        { word: 'scenery', icon: '🏞️' },
        { word: 'landscapes', icon: '🏞️' },
        { word: 'vista', icon: '🌄' },
        { word: 'horizon', icon: '🌅' },
        { word: 'skylines', icon: '🌆' },
        { word: 'cityscapes', icon: '🏙️' },
        { word: 'downtown', icon: '🏙️' },
        { word: 'uptown', icon: '🏘️' },
        { word: 'suburbs', icon: '🏡' },
        { word: 'neighborhoods', icon: '🏘️' },
        { word: 'district', icon: '🗺️' },
        { word: 'regions', icon: '🗺️' },
        { word: 'areas', icon: '📍' },
        { word: 'zones', icon: '🔲' },
        { word: 'sectors', icon: '📊' },
        { word: 'segments', icon: '📏' },
        { word: 'sections', icon: '📑' },
        { word: 'chapters', icon: '📖' },
        { word: 'pages', icon: '📄' },
        { word: 'volumes', icon: '📚' },
        { word: 'series', icon: '📚' },
        { word: 'collections', icon: '📚' },
        { word: 'library', icon: '📚' },
        { word: 'archive', icon: '🗃️' },
        { word: 'records', icon: '📝' },
        { word: 'documents', icon: '📄' },
        { word: 'papers', icon: '📰' },
        { word: 'reports', icon: '📊' },
        { word: 'charts', icon: '📊' },
        { word: 'graphs', icon: '📈' },
        { word: 'tables', icon: '📋' },
        { word: 'lists', icon: '📋' },
        { word: 'entries', icon: '📝' },
        { word: 'items', icon: '📦' },
        { word: 'objects', icon: '🎁' },
        { word: 'things', icon: '📦' },
        { word: 'stuff', icon: '🎒' },
        { word: 'goods', icon: '📦' },
        { word: 'products', icon: '🛍️' },
        { word: 'wares', icon: '🏪' }
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
 * Returns an object with word and icon, or just the word if no icon
 */
function getRandomWord(wordList) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const item = wordList[randomIndex];
    
    // Handle both string format and object format
    if (typeof item === 'string') {
        return { word: item, icon: null };
    }
    return item;
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
 * Key to finger mapping for proper typing technique
 */
const KEY_TO_FINGER_MAP = {
    // Left hand - pinky
    'q': 'left-pinky', 'a': 'left-pinky', 'z': 'left-pinky',
    '1': 'left-pinky', '`': 'left-pinky', 'tab': 'left-pinky',
    
    // Left hand - ring
    'w': 'left-ring', 's': 'left-ring', 'x': 'left-ring',
    '2': 'left-ring',
    
    // Left hand - middle
    'e': 'left-middle', 'd': 'left-middle', 'c': 'left-middle',
    '3': 'left-middle',
    
    // Left hand - index
    'r': 'left-index', 'f': 'left-index', 'v': 'left-index',
    't': 'left-index', 'g': 'left-index', 'b': 'left-index',
    '4': 'left-index', '5': 'left-index',
    
    // Right hand - index
    'y': 'right-index', 'h': 'right-index', 'n': 'right-index',
    'u': 'right-index', 'j': 'right-index', 'm': 'right-index',
    '6': 'right-index', '7': 'right-index',
    
    // Right hand - middle
    'i': 'right-middle', 'k': 'right-middle',
    '8': 'right-middle', ',': 'right-middle',
    
    // Right hand - ring
    'o': 'right-ring', 'l': 'right-ring',
    '9': 'right-ring', '.': 'right-ring',
    
    // Right hand - pinky
    'p': 'right-pinky', '0': 'right-pinky',
    '[': 'right-pinky', ']': 'right-pinky',
    ';': 'right-pinky', "'": 'right-pinky',
    '/': 'right-pinky', '-': 'right-pinky', '=': 'right-pinky'
};

/**
 * Highlight the correct finger for typing the given key
 */
function highlightFinger(letter) {
    const finger = KEY_TO_FINGER_MAP[letter.toLowerCase()];
    
    if (finger) {
        // Remove all previous highlights
        const allFingers = document.querySelectorAll('.finger');
        allFingers.forEach(f => f.classList.remove('highlight'));
        
        // Add highlight to the correct finger
        const fingerElement = document.querySelector(`[data-finger="${finger}"]`);
        if (fingerElement) {
            fingerElement.classList.add('highlight');
            
            // Remove highlight after a short delay
            setTimeout(() => {
                fingerElement.classList.remove('highlight');
            }, 600);
        }
    }
}

/**
 * Highlight finger for the next letter to type
 */
function highlightNextFinger(nextLetter) {
    if (!nextLetter) return;
    
    const finger = KEY_TO_FINGER_MAP[nextLetter.toLowerCase()];
    
    if (finger) {
        // Remove all previous highlights
        const allFingers = document.querySelectorAll('.finger');
        allFingers.forEach(f => f.classList.remove('highlight'));
        
        // Add highlight to show which finger should be used next
        const fingerElement = document.querySelector(`[data-finger="${finger}"]`);
        if (fingerElement) {
            fingerElement.classList.add('highlight');
        }
    }
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
