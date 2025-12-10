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
        { word: 'cat', icon: '🐱', vi: 'con mèo' },
        { word: 'dog', icon: '🐶', vi: 'con chó' },
        { word: 'sun', icon: '☀️', vi: 'mặt trời' },
        { word: 'run', icon: '🏃', vi: 'chạy' },
        { word: 'fun', icon: '🎉', vi: 'vui vẻ' },
        { word: 'hat', icon: '🎩', vi: 'cái mũ' },
        { word: 'bat', icon: '🦇', vi: 'con dơi' },
        { word: 'rat', icon: '🐀', vi: 'con chuột' },
        { word: 'cup', icon: '☕', vi: 'cái cốc' },
        { word: 'bug', icon: '🐛', vi: 'con bọ' },
        { word: 'pen', icon: '🖊️', vi: 'cái bút' },
        { word: 'car', icon: '🚗', vi: 'xe hơi' },
        { word: 'box', icon: '📦', vi: 'cái hộp' },
        { word: 'fox', icon: '🦊', vi: 'con cáo' },
        { word: 'red', icon: '🔴', vi: 'màu đỏ' },
        { word: 'bed', icon: '🛏️', vi: 'giường ngủ' },
        { word: 'leg', icon: '🦵', vi: 'cái chân' },
        { word: 'egg', icon: '🥚', vi: 'quả trứng' },
        { word: 'pie', icon: '🥧', vi: 'bánh nướng' },
        { word: 'bow', icon: '🎀', vi: 'nơ' },
        { word: 'bee', icon: '🐝', vi: 'con ong' },
        { word: 'key', icon: '🔑', vi: 'chìa khóa' },
        { word: 'tea', icon: '🍵', vi: 'trà' },
        { word: 'bus', icon: '🚌', vi: 'xe buýt' },
        { word: 'ant', icon: '🐜', vi: 'con kiến' },
        { word: 'cow', icon: '🐮', vi: 'con bò' },
        { word: 'pig', icon: '🐷', vi: 'con lợn' },
        { word: 'owl', icon: '🦉', vi: 'con cú' },
        { word: 'ice', icon: '🧊', vi: 'nước đá' },
        { word: 'jam', icon: '🍓', vi: 'mứt' },
        { word: 'nut', icon: '🥜', vi: 'hạt' },
        { word: 'web', icon: '🕸️', vi: 'mạng nhện' },
        { word: 'map', icon: '🗺️', vi: 'bản đồ' },
        { word: 'eye', icon: '👁️', vi: 'mắt' },
        { word: 'ear', icon: '👂', vi: 'tai' },
        { word: 'arm', icon: '💪', vi: 'cánh tay' },
        { word: 'air', icon: '💨', vi: 'không khí' },
        { word: 'sky', icon: '🌤️', vi: 'bầu trời' },
        { word: 'sea', icon: '🌊', vi: 'biển' },
        { word: 'gem', icon: '💎', vi: 'đá quý' },
        // 4 letters with icons
        { word: 'love', icon: '❤️', vi: 'yêu thương' },
        { word: 'fish', icon: '🐟', vi: 'con cá' },
        { word: 'star', icon: '⭐', vi: 'ngôi sao' },
        { word: 'moon', icon: '🌙', vi: 'mặt trăng' },
        { word: 'tree', icon: '🌲', vi: 'cây' },
        { word: 'bird', icon: '🐦', vi: 'con chim' },
        { word: 'ball', icon: '⚽', vi: 'quả bóng' },
        { word: 'book', icon: '📚', vi: 'sách' },
        { word: 'cake', icon: '🎂', vi: 'bánh ngọt' },
        { word: 'jump', icon: '🦘', vi: 'nhảy' },
        { word: 'play', icon: '🎮', vi: 'chơi' },
        { word: 'swim', icon: '🏊', vi: 'bơi' },
        { word: 'sing', icon: '🎤', vi: 'hát' },
        { word: 'wave', icon: '👋', vi: 'vẫy tay' },
        { word: 'snow', icon: '❄️', vi: 'tuyết' },
        { word: 'rain', icon: '🌧️', vi: 'mưa' },
        { word: 'wind', icon: '💨', vi: 'gió' },
        { word: 'bear', icon: '🐻', vi: 'con gấu' },
        { word: 'frog', icon: '🐸', vi: 'con ếch' },
        { word: 'duck', icon: '🦆', vi: 'con vịt' },
        { word: 'crab', icon: '🦀', vi: 'con cua' },
        { word: 'lion', icon: '🦁', vi: 'sư tử' },
        { word: 'deer', icon: '🦌', vi: 'con nai' },
        { word: 'wolf', icon: '🐺', vi: 'con sói' },
        { word: 'panda', icon: '🐼', vi: 'gấu trúc' },
        { word: 'koala', icon: '🐨', vi: 'gấu túi' },
        { word: 'shark', icon: '🦈', vi: 'cá mập' },
        { word: 'whale', icon: '🐋', vi: 'cá voi' },
        { word: 'snail', icon: '🐌', vi: 'ốc sên' },
        { word: 'fire', icon: '🔥', vi: 'lửa' },
        { word: 'gift', icon: '🎁', vi: 'quà tặng' },
        { word: 'ring', icon: '💍', vi: 'nhẫn' },
        { word: 'bell', icon: '🔔', vi: 'chuông' },
        { word: 'coin', icon: '🪙', vi: 'đồng xu' },
        { word: 'lamp', icon: '💡', vi: 'đèn' },
        { word: 'door', icon: '🚪', vi: 'cửa' },
        { word: 'tent', icon: '⛺', vi: 'lều' },
        { word: 'boat', icon: '⛵', vi: 'thuyền' },
        { word: 'ship', icon: '🚢', vi: 'tàu' },
        { word: 'bike', icon: '🚲', vi: 'xe đạp' },
        { word: 'drum', icon: '🥁', vi: 'trống' },
        { word: 'horn', icon: '📯', vi: 'kèn' },
        { word: 'flag', icon: '🚩', vi: 'cờ' },
        { word: 'bomb', icon: '💣', vi: 'bom' },
        { word: 'kite', icon: '🪁', vi: 'diều' },
        { word: 'sock', icon: '🧦', vi: 'tất' },
        { word: 'coat', icon: '🧥', vi: 'áo khoác' },
        { word: 'shoe', icon: '👟', vi: 'giày' },
        { word: 'boot', icon: '👢', vi: 'ủng' },
        { word: 'baby', icon: '👶', vi: 'em bé' },
        { word: 'king', icon: '🤴', vi: 'vua' },
        { word: 'girl', icon: '👧', vi: 'bé gái' },
        { word: 'boy', icon: '👦', vi: 'bé trai' },
        { word: 'clap', icon: '👏', vi: 'vỗ tay' },
        { word: 'pray', icon: '🙏', vi: 'cầu nguyện' },
        { word: 'food', icon: '🍽️', vi: 'thức ăn' },
        { word: 'meat', icon: '🍖', vi: 'thịt' },
        { word: 'taco', icon: '🌮', vi: 'bánh taco' },
        { word: 'rice', icon: '🍚', vi: 'cơm' },
        { word: 'soup', icon: '🍜', vi: 'súp' },
        { word: 'corn', icon: '🌽', vi: 'ngô' },
        { word: 'pear', icon: '🍐', vi: 'lê' },
        { word: 'lime', icon: '🍋', vi: 'chanh' },
        { word: 'peach', icon: '🍑', vi: 'đào' },
        { word: 'plum', icon: '🪴', vi: 'mận' },
        { word: 'milk', icon: '🥛', vi: 'sữa' },
        { word: 'leaf', icon: '🍃', vi: 'lá' },
        { word: 'rose', icon: '🌹', vi: 'hoa hồng' },
        { word: 'herb', icon: '🌿', vi: 'thảo mộc' },
        { word: 'rock', icon: '🪨', vi: 'đá' },
        { word: 'comet', icon: '☄️', vi: 'sao chổi' },
        { word: 'cloud', icon: '☁️', vi: 'mây' },
        { word: 'storm', icon: '⛈️', vi: 'bão' },
        // 5 letters with icons
        { word: 'apple', icon: '🍎', vi: 'táo' },
        { word: 'happy', icon: '😊', vi: 'vui vẻ' },
        { word: 'smart', icon: '🧠', vi: 'thông minh' },
        { word: 'smile', icon: '😄', vi: 'nụ cười' },
        { word: 'dance', icon: '💃', vi: 'nhảy múa' },
        { word: 'music', icon: '🎵', vi: 'âm nhạc' },
        { word: 'ocean', icon: '🌊', vi: 'đại dương' },
        { word: 'beach', icon: '🏖️', vi: 'bãi biển' },
        { word: 'candy', icon: '🍬', vi: 'kẹo' },
        { word: 'pizza', icon: '🍕', vi: 'pizza' },
        { word: 'tiger', icon: '🐯', vi: 'hổ' },
        { word: 'horse', icon: '🐴', vi: 'ngựa' },
        { word: 'plane', icon: '✈️', vi: 'máy bay' },
        { word: 'train', icon: '🚂', vi: 'tàu hỏa' },
        { word: 'house', icon: '🏠', vi: 'nhà' },
        { word: 'heart', icon: '💖', vi: 'trái tim' },
        { word: 'zebra', icon: '🦓', vi: 'ngựa vằn' },
        { word: 'camel', icon: '🐫', vi: 'lạc đà' },
        { word: 'snake', icon: '🐍', vi: 'rắn' },
        { word: 'mouse', icon: '🐭', vi: 'chuột' },
        { word: 'sheep', icon: '🐑', vi: 'cừu' },
        { word: 'goat', icon: '🐐', vi: 'dê' },
        { word: 'rhino', icon: '🦏', vi: 'tê giác' },
        { word: 'sloth', icon: '🦥', vi: 'con lười' },
        { word: 'otter', icon: '🦦', vi: 'rái cá' },
        { word: 'eagle', icon: '🦅', vi: 'dai bàng' },
        { word: 'crane', icon: '🦤', vi: 'con sâu' },
        { word: 'squid', icon: '🦑', vi: 'mực' },
        { word: 'shrimp', icon: '🦐', vi: 'tôm' },
        { word: 'tulip', icon: '🌷', vi: 'hoa tulip' },
        { word: 'plant', icon: '🪴', vi: 'cây cối' },
        { word: 'earth', icon: '🌍', vi: 'trái đất' },
        { word: 'globe', icon: '🌎', vi: 'quả địa cầu' },
        { word: 'world', icon: '🌏', vi: 'thế giới' },
        { word: 'space', icon: '🌌', vi: 'không gian' },
        { word: 'comet', icon: '☄️', vi: 'sao chổi' },
        { word: 'crown', icon: '👑', vi: 'vương miện' },
        { word: 'sword', icon: '⚔️', vi: 'kiếm' },
        { word: 'shield', icon: '🛡️', vi: 'lá chắn' },
        { word: 'arrow', icon: '➡️', vi: 'mũi tên' },
        { word: 'paint', icon: '🎨', vi: 'sơn' },
        { word: 'watch', icon: '⌚', vi: 'đồng hồ' },
        { word: 'phone', icon: '📱', vi: 'điện thoại' },
        { word: 'clock', icon: '⏰', vi: 'đồng hồ' },
        { word: 'radio', icon: '📻', vi: 'đài' },
        { word: 'movie', icon: '🎬', vi: 'phim' },
        { word: 'photo', icon: '📷', vi: 'ảnh' },
        { word: 'video', icon: '📹', vi: 'video' },
        { word: 'angel', icon: '👼', vi: 'thiên thần' },
        { word: 'fairy', icon: '🧚', vi: 'nàng tiên' },
        { word: 'ghost', icon: '👻', vi: 'ma' },
        { word: 'robot', icon: '🤖', vi: 'rô-bốt' },
        { word: 'alien', icon: '👽', vi: 'người ngoài hành tinh' },
        { word: 'mummy', icon: '🧟', vi: 'xac ước' },
        { word: 'witch', icon: '🧙', vi: 'phù thủy' },
        { word: 'magic', icon: '✨', vi: 'phép thuật' },
        { word: 'bread', icon: '🍞', vi: 'bánh mì' },
        { word: 'bacon', icon: '🥓', vi: 'thịt xông khói' },
        { word: 'salad', icon: '🥗', vi: 'salad' },
        { word: 'pasta', icon: '🍝', vi: 'mì Ý' },
        { word: 'sushi', icon: '🍣', vi: 'sushi' },
        { word: 'taco', icon: '🌮', vi: 'taco' },
        { word: 'donut', icon: '🍩', vi: 'bánh ráng' },
        { word: 'honey', icon: '🍯', vi: 'mật ong' },
        { word: 'mango', icon: '🥭', vi: 'xoài' },
        { word: 'grape', icon: '🍇', vi: 'nho' },
        { word: 'melon', icon: '🍉', vi: 'dưa hấu' },
        { word: 'peach', icon: '🍑', vi: 'đào' },
        { word: 'lemon', icon: '🍋', vi: 'chanh' },
        { word: 'berry', icon: '🫐', vi: 'quả mọng' },
        { word: 'water', icon: '💧', vi: 'nước' },
        { word: 'juice', icon: '🧃', vi: 'nước ép' },
        { word: 'broom', icon: '🧹', vi: 'chổi' },
        { word: 'towel', icon: '🧻', vi: 'khăn' },
        { word: 'brush', icon: '🪥', vi: 'bàn chải' },
        { word: 'chair', icon: '🪑', vi: 'ghế' },
        { word: 'couch', icon: '🛋️', vi: 'ghế sô-pha' },
        { word: 'table', icon: '🪑', vi: 'bàn' },
        { word: 'scarf', icon: '🧣', vi: 'khăn quàng' },
        { word: 'glove', icon: '🧤', vi: 'găng tay' },
        { word: 'shirt', icon: '👕', vi: 'áo sơ mi' },
        { word: 'dress', icon: '👗', vi: 'đầm' },
        { word: 'pants', icon: '👖', vi: 'quần' },
        { word: 'jeans', icon: '👖', vi: 'quần jean' },
        { word: 'purse', icon: '👛', vi: 'túi xách' },
        // More 3-letter words (duplicates removed, Vietnamese added)
        { word: 'log', icon: '🪵', vi: 'khúc gỗ' },
        { word: 'oak', icon: '🌳', vi: 'cây sồi' },
        { word: 'log', icon: '🪵', vi: 'khúc gỗ' },
        { word: 'oak', icon: '🌳', vi: 'cây sồi' },
        { word: 'tag', icon: '🏷️', vi: 'nhãn' },
        { word: 'zip', icon: '🤐', vi: 'khóa kéo' },
        { word: 'ink', icon: '🖋️', vi: 'mực' },
        { word: 'ape', icon: '🦍', vi: 'khỉ' },
        { word: 'dam', icon: '🦫', vi: 'đập' },
        { word: 'net', icon: '🥅', vi: 'lưới' },
        { word: 'bay', icon: '🌊', vi: 'vịnh' },
        { word: 'dew', icon: '💧', vi: 'sương' },
        { word: 'fin', icon: '🦈', vi: 'vây' },
        { word: 'fog', icon: '🌫️', vi: 'sương mù' },
        { word: 'hay', icon: '🌾', vi: 'cỏ khô' },
        { word: 'ivy', icon: '🌿', vi: 'dây leo' },
        { word: 'jaw', icon: '🦷', vi: 'hàm' },
        { word: 'kit', icon: '🧰', vi: 'bộ dụng cụ' },
        { word: 'lap', icon: '🏁', vi: 'vòng đua' },
        { word: 'mat', icon: '🧘', vi: 'thảm' },
        { word: 'nap', icon: '😴', vi: 'ngủ ngày' },
        { word: 'oar', icon: '🚣', vi: 'mái chèo' },
        { word: 'orb', icon: '🔮', vi: 'quả cầu' },
        { word: 'pad', icon: '📝', vi: 'tập giấy' },
        { word: 'pan', icon: '🍳', vi: 'chảo' },
        { word: 'paw', icon: '🐾', vi: 'bàn chân' },
        { word: 'pod', icon: '🫛', vi: 'vỏ' },
        { word: 'pot', icon: '🍯', vi: 'nồi' },
        { word: 'pub', icon: '🍺', vi: 'quán rượu' },
        { word: 'rim', icon: '⭕', vi: 'vành' },
        { word: 'rod', icon: '🎣', vi: 'cần câu' },
        { word: 'row', icon: '🚣', vi: 'chèo thuyền' },
        { word: 'sap', icon: '🌲', vi: 'nhựa cây' },
        { word: 'saw', icon: '🪚', vi: 'cái cưa' },
        { word: 'spy', icon: '🕵️', vi: 'điệp viên' },
        { word: 'tab', icon: '🗂️', vi: 'thẻ' },
        { word: 'tan', icon: '🟤', vi: 'màu nâu' },
        { word: 'tap', icon: '🚰', vi: 'vòi nước' },
        { word: 'tar', icon: '🛢️', vi: 'nhựa đường' },
        { word: 'tub', icon: '🛁', vi: 'bồn tắm' },
        { word: 'van', icon: '🚐', vi: 'xe tải' },
        { word: 'vet', icon: '👨‍⚕️', vi: 'bác sĩ thú y' },
        { word: 'wax', icon: '🕯️', vi: 'sáp' },
        { word: 'wig', icon: '💇', vi: 'tóc giả' },
        { word: 'yak', icon: '🦬', vi: 'bò Tây Tạng' },
        { word: 'yam', icon: '🍠', vi: 'khoai mỡ' },
        { word: 'yen', icon: '💴', vi: 'tiền yên' },
        { word: 'yes', icon: '✅', vi: 'có' },
        { word: 'yin', icon: '☯️', vi: 'âm' },
        { word: 'zoo', icon: '🦁', vi: 'vườn thú' },
        // More 4-letter words
        { word: 'frog', icon: '🐸', vi: 'con ếch' },
        { word: 'duck', icon: '🦆', vi: 'con vịt' },
        { word: 'crab', icon: '🦀', vi: 'con cua' },
        { word: 'lion', icon: '🦁', vi: 'con sư tử' },
        { word: 'deer', icon: '🦌', vi: 'con nai' },
        { word: 'wolf', icon: '🐺', vi: 'con sói' },
        { word: 'panda', icon: '🐼', vi: 'gấu trúc' },
        { word: 'koala', icon: '🐨', vi: 'gấu túi' },
        { word: 'shark', icon: '🦈', vi: 'cá mập' },
        { word: 'whale', icon: '🐋', vi: 'cá voi' },
        { word: 'snail', icon: '🐌', vi: 'con ốc sên' },
        { word: 'fire', icon: '🔥', vi: 'lửa' },
        { word: 'gift', icon: '🎁', vi: 'quà tặng' },
        { word: 'ring', icon: '💍', vi: 'nhẫn' },
        { word: 'bell', icon: '🔔', vi: 'chuông' },
        { word: 'coin', icon: '🪙', vi: 'đồng xu' },
        { word: 'lamp', icon: '💡', vi: 'đèn' },
        { word: 'door', icon: '🚪', vi: 'cửa' },
        { word: 'tent', icon: '⛺', vi: 'lều' },
        { word: 'boat', icon: '⛵', vi: 'thuyền' },
        { word: 'ship', icon: '🚢', vi: 'tàu' },
        { word: 'bike', icon: '🚲', vi: 'xe đạp' },
        { word: 'drum', icon: '🥁', vi: 'trống' },
        { word: 'horn', icon: '📯', vi: 'kèn' },
        { word: 'flag', icon: '🚩', vi: 'cờ' },
        { word: 'bomb', icon: '💣', vi: 'bom' },
        { word: 'sock', icon: '🧦', vi: 'tất' },
        { word: 'coat', icon: '🧥', vi: 'áo khoác' },
        { word: 'shoe', icon: '👟', vi: 'giày' },
        { word: 'boot', icon: '👢', vi: 'ủng' },
        { word: 'baby', icon: '👶', vi: 'em bé' },
        { word: 'king', icon: '🤴', vi: 'vua' },
        { word: 'girl', icon: '👧', vi: 'bé gái' },
        { word: 'boy', icon: '👦', vi: 'bé trai' },
        { word: 'clap', icon: '👏', vi: 'vỗ tay' },
        { word: 'pray', icon: '🙏', vi: 'cầu nguyện' },
        { word: 'food', icon: '🍽️', vi: 'thức ăn' },
        { word: 'meat', icon: '🍖', vi: 'thịt' },
        { word: 'taco', icon: '🌮', vi: 'bánh taco' },
        { word: 'rice', icon: '🍚', vi: 'cơm' },
        { word: 'soup', icon: '🍜', vi: 'súp' },
        { word: 'corn', icon: '🌽', vi: 'ngô' },
        { word: 'pear', icon: '🍐', vi: 'lê' },
        { word: 'lime', icon: '🍋', vi: 'chanh' },
        { word: 'peach', icon: '🍑', vi: 'đào' },
        { word: 'plum', icon: '🪴', vi: 'mận' },
        { word: 'milk', icon: '🥛', vi: 'sữa' },
        { word: 'leaf', icon: '🍃', vi: 'lá' },
        { word: 'rose', icon: '🌹', vi: 'hoa hồng' },
        { word: 'herb', icon: '🌿', vi: 'thảo mộc' },
        { word: 'rock', icon: '🪨', vi: 'đá' },
        { word: 'comet', icon: '☄️', vi: 'sao chổi' },
        { word: 'cloud', icon: '☁️', vi: 'mây' },
        { word: 'storm', icon: '⛈️', vi: 'bão' },
        { word: 'seal', icon: '🦭', vi: 'hải cẩu' },
        { word: 'claw', icon: '🦞', vi: 'móng vuốt' },
        { word: 'hoof', icon: '🐴', vi: 'móng guốc' },
        { word: 'wing', icon: '🦅', vi: 'cánh' },
        { word: 'beak', icon: '🦜', vi: 'mỏ' },
        { word: 'nest', icon: '🪺', vi: 'tổ' },
        { word: 'hive', icon: '🐝', vi: 'tổ ong' },
        { word: 'cave', icon: '🕳️', vi: 'hang động' },
        { word: 'reef', icon: '🐠', vi: 'rạn san hô' },
        { word: 'pool', icon: '🏊', vi: 'hồ bơi' },
        { word: 'pond', icon: '🦆', vi: 'ao' },
        { word: 'lake', icon: '🏞️', vi: 'hồ' },
        { word: 'park', icon: '🏞️', vi: 'công viên' },
        { word: 'yard', icon: '🏡', vi: 'sân' },
        { word: 'farm', icon: '🚜', vi: 'nông trại' },
        { word: 'barn', icon: '🏚️', vi: 'chuồng' },
        { word: 'shed', icon: '🏗️', vi: 'nhà kho' },
        { word: 'wall', icon: '🧱', vi: 'tường' },
        { word: 'gate', icon: '🚧', vi: 'cổng' },
        { word: 'path', icon: '🛤️', vi: 'con đường' },
        { word: 'road', icon: '🛣️', vi: 'đường' },
        { word: 'town', icon: '🏘️', vi: 'thị trấn' },
        { word: 'city', icon: '🌆', vi: 'thành phố' },
        { word: 'bank', icon: '🏦', vi: 'ngân hàng' },
        { word: 'shop', icon: '🏪', vi: 'cửa hàng' },
        { word: 'mall', icon: '🏬', vi: 'trung tâm' },
        { word: 'cafe', icon: '☕', vi: 'quán cà phê' },
        { word: 'deli', icon: '🥪', vi: 'cửa hàng thực phẩm' },
        { word: 'taxi', icon: '🚕', vi: 'taxi' },
        { word: 'jeep', icon: '🚙', vi: 'xe jeep' },
        { word: 'tank', icon: '🚂', vi: 'xe tăng' },
        { word: 'sail', icon: '⛵', vi: 'buồm' },
        { word: 'raft', icon: '🛶', vi: 'bè' },
        { word: 'pier', icon: '🌉', vi: 'cầu tàu' },
        { word: 'port', icon: '⚓', vi: 'cảng' },
        { word: 'dock', icon: '🚢', vi: 'bến tàu' },
        { word: 'mast', icon: '⛵', vi: 'cột buồm' },
        { word: 'helm', icon: '⚓', vi: 'lái tàu' },
        { word: 'crew', icon: '👥', vi: 'thủy thủ đoàn' },
        { word: 'hero', icon: '🦸', vi: 'anh hùng' },
        { word: 'zero', icon: '0️⃣', vi: 'số không' },
        { word: 'echo', icon: '📢', vi: 'tiếng vang' },
        { word: 'myth', icon: '🐉', vi: 'thần thoại' },
        { word: 'saga', icon: '📖', vi: 'truyện' },
        { word: 'tale', icon: '📚', vi: 'câu chuyện' },
        { word: 'poem', icon: '📝', vi: 'thơ' },
        { word: 'song', icon: '🎵', vi: 'bài hát' },
        { word: 'tune', icon: '🎶', vi: 'giai điệu' },
        { word: 'beat', icon: '🥁', vi: 'nhịp' },
        { word: 'jazz', icon: '🎷', vi: 'nhạc jazz' },
        { word: 'rock', icon: '🎸', vi: 'nhạc rock' },
        { word: 'folk', icon: '🪕', vi: 'dân ca' },
        { word: 'gala', icon: '🎭', vi: 'lễ hội' },
        { word: 'show', icon: '🎪', vi: 'chương trình' },
        { word: 'circus', icon: '🎪', vi: 'xiếc' },
        { word: 'film', icon: '🎬', vi: 'phim' },
        { word: 'cast', icon: '🎭', vi: 'diễn viên' },
        { word: 'crew', icon: '🎥', vi: 'đoàn làm phim' },
        { word: 'lens', icon: '📷', vi: 'ống kính' },
        { word: 'zoom', icon: '🔍', vi: 'phóng to' },
        { word: 'snap', icon: '📸', vi: 'chụp' },
        { word: 'shot', icon: '📷', vi: 'ảnh chụp' },
        { word: 'view', icon: '👀', vi: 'xem' },
        { word: 'peek', icon: '👁️', vi: 'nhìn trộm' },
        { word: 'look', icon: '👀', vi: 'nhìn' },
        { word: 'scan', icon: '🔎', vi: 'quét' },
        { word: 'spot', icon: '🔍', vi: 'phát hiện' },
        { word: 'find', icon: '🔎', vi: 'tìm' },
        { word: 'hunt', icon: '🔍', vi: 'săn' },
        { word: 'seek', icon: '🕵️', vi: 'tìm kiếm' },
        { word: 'hide', icon: '🙈', vi: 'trốn' },
        { word: 'peek', icon: '🙉', vi: 'nhìn lén' },
        { word: 'wait', icon: '⏳', vi: 'đợi' },
        { word: 'stay', icon: '🏠', vi: 'ở lại' },
        { word: 'come', icon: '🚶', vi: 'đến' },
        { word: 'exit', icon: '🚪', vi: 'ra' },
        { word: 'push', icon: '👉', vi: 'đẩy' },
        { word: 'pull', icon: '👈', vi: 'kéo' },
        { word: 'lift', icon: '🏋️', vi: 'nâng' },
        { word: 'drop', icon: '⬇️', vi: 'thả' },
        { word: 'toss', icon: '🤾', vi: 'ném' },
        { word: 'pass', icon: '🏈', vi: 'chuyền' },
        { word: 'kick', icon: '⚽', vi: 'đá' },
        { word: 'punt', icon: '🏉', vi: 'đá bóng' },
        { word: 'shot', icon: '🏀', vi: 'cú sút' },
        { word: 'dunk', icon: '🏀', vi: 'úp rổ' },
        { word: 'goal', icon: '🥅', vi: 'mục tiêu' },
        { word: 'team', icon: '👥', vi: 'đội' },
        { word: 'game', icon: '🎮', vi: 'trò chơi' },
        { word: 'quiz', icon: '❓', vi: 'câu đố' },
        { word: 'test', icon: '📝', vi: 'kiểm tra' },
        { word: 'exam', icon: '📄', vi: 'thi' },
        { word: 'math', icon: '🔢', vi: 'toán' },
        { word: 'plus', icon: '➕', vi: 'cộng' },
        { word: 'less', icon: '➖', vi: 'trừ' },
        { word: 'half', icon: '½', vi: 'một nửa' },
        { word: 'pair', icon: '👫', vi: 'cặp' },
        { word: 'trio', icon: '3️⃣', vi: 'bộ ba' },
        { word: 'quad', icon: '4️⃣', vi: 'bộ bốn' },
        { word: 'five', icon: '5️⃣', vi: 'năm' },
        { word: 'size', icon: '📏', vi: 'kích thước' },
        { word: 'tall', icon: '📏', vi: 'cao' },
        { word: 'high', icon: '⬆️', vi: 'cao' },
        { word: 'deep', icon: '⬇️', vi: 'sâu' },
        { word: 'wide', icon: '↔️', vi: 'rộng' },
        { word: 'long', icon: '➡️', vi: 'dài' },
        { word: 'fast', icon: '💨', vi: 'nhanh' },
        { word: 'slow', icon: '🐌', vi: 'chậm' },
        { word: 'warm', icon: '🌡️', vi: 'ấm' },
        { word: 'cool', icon: '❄️', vi: 'mát' },
        { word: 'hot', icon: '🔥', vi: 'nóng' },
        { word: 'cold', icon: '🧊', vi: 'lạnh' },
        { word: 'soft', icon: '🧸', vi: 'mềm' },
        { word: 'hard', icon: '🪨', vi: 'cứng' },
        { word: 'loud', icon: '🔊', vi: 'ồn' },
        { word: 'calm', icon: '😌', vi: 'bình tĩnh' },
        { word: 'wild', icon: '🦁', vi: 'hoang dã' },
        { word: 'tame', icon: '🐕', vi: 'thuần' },
        { word: 'bold', icon: '💪', vi: 'dũng cảm' },
        { word: 'shy', icon: '🙈', vi: 'nhút nhát' },
        { word: 'kind', icon: '💝', vi: 'tốt bụng' },
        { word: 'rude', icon: '😤', vi: 'thô lỗ' },
        { word: 'good', icon: '👍', vi: 'tốt' },
        { word: 'evil', icon: '😈', vi: 'xấu' },
        { word: 'pure', icon: '✨', vi: 'trong sạch' },
        { word: 'dark', icon: '🌑', vi: 'tối' },
        { word: 'dawn', icon: '🌅', vi: 'bình minh' },
        { word: 'dusk', icon: '🌆', vi: 'hoàng hôn' },
        { word: 'noon', icon: '☀️', vi: 'trưa' },
        { word: 'week', icon: '📅', vi: 'tuần' },
        { word: 'year', icon: '🗓️', vi: 'năm' },
        { word: 'past', icon: '⏮️', vi: 'quá khứ' },
        { word: 'next', icon: '⏭️', vi: 'tiếp theo' },
        { word: 'soon', icon: '⏰', vi: 'sớm' },
        { word: 'late', icon: '🕐', vi: 'muộn' },
        { word: 'time', icon: '⏰', vi: 'thời gian' },
        { word: 'date', icon: '📅', vi: 'ngày' },
        { word: 'hour', icon: '🕐', vi: 'giờ' },
        { word: 'tick', icon: '⏱️', vi: 'tích tắc' },
        { word: 'tone', icon: '🔔', vi: 'âm thanh' },
        { word: 'beep', icon: '📢', vi: 'tiếng bíp' },
        { word: 'buzz', icon: '📳', vi: 'tiếng vo ve' },
        { word: 'honk', icon: '📯', vi: 'tiếng còi' },
        { word: 'bark', icon: '🐕', vi: 'sủa' },
        { word: 'meow', icon: '🐱', vi: 'meo meo' },
        { word: 'roar', icon: '🦁', vi: 'gầm' },
        { word: 'hiss', icon: '🐍', vi: 'rít' },
        { word: 'purr', icon: '😺', vi: 'kêu gừ gừ' },
        { word: 'moo', icon: '🐮', vi: 'ò ó' },
        { word: 'oink', icon: '🐷', vi: 'ủn ỉn' },
        { word: 'crow', icon: '🐓', vi: 'gáy' },
        { word: 'hoot', icon: '🦉', vi: 'hú' },
        { word: 'chirp', icon: '🐦', vi: 'hót' },
        { word: 'quack', icon: '🦆', vi: 'quạc quạc' },
        { word: 'baa', icon: '🐑', vi: 'be be' },
        { word: 'neigh', icon: '🐴', vi: 'hí' },
        // intermediate level continues...
        { word: 'dress', icon: '👗', vi: 'đầm' },
        { word: 'pants', icon: '👖', vi: 'quần' },
        { word: 'jeans', icon: '👖', vi: 'quần jean' },
        { word: 'purse', icon: '👛', vi: 'túi xách' },
        { word: 'panda', icon: '🐼', vi: 'gấu trúc' },
        { word: 'moose', icon: '🫎', vi: 'nai sừng' },
        { word: 'bison', icon: '🦬', vi: 'bò rừng' },
        { word: 'hyena', icon: '🐕', vi: 'linh cẩu' },
        { word: 'lemur', icon: '🐒', vi: 'vượn cáo' },
        { word: 'skunk', icon: '🦨', vi: 'chồn hôi' },
        { word: 'meerkat', icon: '🦡', vi: 'cầy giúp' },
        { word: 'orca', icon: '🐋', vi: 'cá voi sát thủ' },
        { word: 'coral', icon: '🪸', vi: 'san hô' },
        { word: 'pearl', icon: '🦪', vi: 'ngọc trai' },
        { word: 'shell', icon: '🐚', vi: 'vỏ sò' },
        { word: 'scale', icon: '🐟', vi: 'vảy' },
        { word: 'spine', icon: '🦔', vi: 'gai' },
        { word: 'pouch', icon: '🦘', vi: 'túi' },
        { word: 'trunk', icon: '🐘', vi: 'vòi' },
        { word: 'snout', icon: '🐽', vi: 'mõm' },
        { word: 'muzzle', icon: '🐕', vi: 'mõm' },
        { word: 'antler', icon: '🦌', vi: 'gạc' },
        { word: 'quill', icon: '🦔', vi: 'gai nhím' },
        { word: 'fang', icon: '🐍', vi: 'nanh' },
        { word: 'venom', icon: '🦂', vi: 'nọc độc' },
        { word: 'talon', icon: '🦅', vi: 'móng vuốt' },
        { word: 'feather', icon: '🪶', vi: 'lông vũ' },
        { word: 'petal', icon: '🌸', vi: 'cánh hoa' },
        { word: 'bloom', icon: '🌺', vi: 'nở hoa' },
        { word: 'fruit', icon: '🍎', vi: 'trái cây' },
        { word: 'seeds', icon: '🌱', vi: 'hạt giống' },
        { word: 'roots', icon: '🌿', vi: 'rễ' },
        { word: 'stump', icon: '🪵', vi: 'gốc cây' },
        { word: 'twig', icon: '🌿', vi: 'cành nhỏ' },
        { word: 'grove', icon: '🌳', vi: 'rừng nhỏ' },
        { word: 'woods', icon: '🌲', vi: 'rừng' },
        { word: 'brush', icon: '🌿', vi: 'bụi rậm' },
        { word: 'marsh', icon: '🦆', vi: 'đầm lầy' },
        { word: 'swamp', icon: '🐊', vi: 'vũng lầy' },
        { word: 'delta', icon: '🌊', vi: 'đồng bằng' },
        { word: 'shore', icon: '🏖️', vi: 'bờ biển' },
        { word: 'cliff', icon: '🏔️', vi: 'vách đá' },
        { word: 'ridge', icon: '⛰️', vi: 'dãy núi' },
        { word: 'slope', icon: '⛷️', vi: 'dốc' },
        { word: 'peaks', icon: '🏔️', vi: 'đỉnh núi' },
        { word: 'crest', icon: '🌊', vi: 'đỉnh sóng' },
        { word: 'waves', icon: '🌊', vi: 'sóng' },
        { word: 'tides', icon: '🌊', vi: 'thủy triều' },
        { word: 'froth', icon: '🌊', vi: 'bọt' },
        { word: 'spray', icon: '💦', vi: 'phun' },
        { word: 'steam', icon: '♨️', vi: 'hơi nước' },
        { word: 'frost', icon: '❄️', vi: 'sương giá' },
        { word: 'chill', icon: '🥶', vi: 'rét' },
        { word: 'blaze', icon: '🔥', vi: 'ngọn lửa' },
        { word: 'flame', icon: '🔥', vi: 'ngọn lửa' },
        { word: 'spark', icon: '✨', vi: 'tia lửa' },
        { word: 'glow', icon: '💡', vi: 'phát sáng' },
        { word: 'shine', icon: '✨', vi: 'tỏa sáng' },
        { word: 'flash', icon: '⚡', vi: 'chớp' },
        { word: 'gleam', icon: '✨', vi: 'lấp lánh' },
        { word: 'twinkle', icon: '✨', vi: 'lấp lánh' },
        { word: 'shade', icon: '🌳', vi: 'bóng mát' },
        { word: 'light', icon: '💡', vi: 'ánh sáng' },
        { word: 'neon', icon: '🌟', vi: 'đèn neon' },
        { word: 'prism', icon: '🌈', vi: 'lăng kính' },
        { word: 'color', icon: '🎨', vi: 'màu sắc' },
        { word: 'azure', icon: '🔵', vi: 'xanh da trời' },
        { word: 'amber', icon: '🟠', vi: 'hổ phách' },
        { word: 'coral', icon: '🪸', vi: 'san hô' },
        { word: 'ivory', icon: '⚪', vi: 'ngà' },
        { word: 'olive', icon: '🫒', vi: 'ô liu' },
        { word: 'pearl', icon: '⚪', vi: 'ngọc trai' },
        { word: 'slate', icon: '⬛', vi: 'đá phiến' },
        { word: 'brass', icon: '🟡', vi: 'đồng thau' },
        { word: 'chalk', icon: '⚪', vi: 'phấn' },
        { word: 'paint', icon: '🎨', vi: 'sơn' },
        { word: 'tints', icon: '🎨', vi: 'màu nhạt' },
        { word: 'shade', icon: '🎨', vi: 'màu đậm' },
        { word: 'hue', icon: '🌈', vi: 'sắc độ' },
        { word: 'canvas', icon: '🖼️', vi: 'bức tranh' },
        { word: 'easel', icon: '🎨', vi: 'giá vẽ' },
        { word: 'mural', icon: '🎨', vi: 'tranh tường' },
        { word: 'sketch', icon: '✏️', vi: 'phác thảo' },
        { word: 'draft', icon: '📝', vi: 'bản thảo' },
        { word: 'trace', icon: '📝', vi: 'vạch nét' },
        { word: 'scrawl', icon: '✍️', vi: 'viết nguệch ngoạc' },
        { word: 'doodle', icon: '✏️', vi: 'vẽ nguệch ngoạc' },
        { word: 'craft', icon: '✂️', vi: 'thủ công' },
        { word: 'build', icon: '🔨', vi: 'xây' },
        { word: 'forge', icon: '⚒️', vi: 'rèn' },
        { word: 'mould', icon: '🏺', vi: 'khuôn' },
        { word: 'shape', icon: '🔷', vi: 'hình dạng' },
        { word: 'twist', icon: '🌀', vi: 'xoắn' },
        { word: 'bend', icon: '↩️', vi: 'uốn' },
        { word: 'curve', icon: '〰️', vi: 'đường cong' },
        { word: 'angle', icon: '📐', vi: 'góc' },
        { word: 'point', icon: '👉', vi: 'điểm' },
        { word: 'lines', icon: '➖', vi: 'đường' },
        { word: 'edges', icon: '📐', vi: 'cạnh' },
        { word: 'faces', icon: '🔷', vi: 'mặt' },
        { word: 'sides', icon: '🔲', vi: 'cạnh' },
        { word: 'round', icon: '⭕', vi: 'tròn' },
        { word: 'oval', icon: '🥚', vi: 'bầu dục' },
        { word: 'square', icon: '🟦', vi: 'vuông' },
        { word: 'cube', icon: '🧊', vi: 'khối lập phương' },
        { word: 'cone', icon: '🍦', vi: 'hình nón' },
        { word: 'cylinder', icon: '🥫', vi: 'hình trụ' },
        { word: 'sphere', icon: '⚽', vi: 'hình cầu' },
        { word: 'prism', icon: '🔶', vi: 'lăng trụ' },
        { word: 'wedge', icon: '🧀', vi: 'nêm' },
        { word: 'slice', icon: '🍕', vi: 'lát' },
        { word: 'piece', icon: '🧩', vi: 'mảnh' },
        { word: 'chunk', icon: '🧊', vi: 'miếng' },
        { word: 'crumb', icon: '🍞', vi: 'vụn' },
        { word: 'shard', icon: '💎', vi: 'mảnh vỡ' },
        { word: 'scrap', icon: '🗑️', vi: 'phế liệu' },
        { word: 'waste', icon: '♻️', vi: 'chất thải' },
        { word: 'trash', icon: '🗑️', vi: 'rác' },
        { word: 'junk', icon: '🗑️', vi: 'đồ bỏ' },
        { word: 'clean', icon: '✨', vi: 'sạch' },
        { word: 'fresh', icon: '🌿', vi: 'tươi' },
        { word: 'crisp', icon: '🥖', vi: 'giòn' },
        { word: 'sweet', icon: '🍭', vi: 'ngọt' },
        { word: 'sour', icon: '🍋', vi: 'chua' },
        { word: 'spicy', icon: '🌶️', vi: 'cay' },
        { word: 'salty', icon: '🧂', vi: 'mặn' },
        { word: 'bland', icon: '🍚', vi: 'nhạt' },
        { word: 'tasty', icon: '😋', vi: 'ngon' },
        { word: 'yummy', icon: '😋', vi: 'ngon tuyệt' },
        { word: 'gross', icon: '🤢', vi: 'ghê' },
        { word: 'stale', icon: '🍞', vi: 'cũ' },
        { word: 'rotten', icon: '🤢', vi: 'thối' },
        { word: 'moldy', icon: '🦠', vi: 'mốc' },
        { word: 'germ', icon: '🦠', vi: 'vi trùng' },
        { word: 'virus', icon: '🦠', vi: 'vi rút' },
        { word: 'cough', icon: '🤧', vi: 'ho' },
        { word: 'sneeze', icon: '🤧', vi: 'hắt hơi' },
        { word: 'fever', icon: '🤒', vi: 'sốt' },
        { word: 'ache', icon: '🤕', vi: 'đau' },
        { word: 'sore', icon: '🩹', vi: 'đau nhức' },
        { word: 'bruise', icon: '🩹', vi: 'bầm' },
        { word: 'wound', icon: '🩹', vi: 'vết thương' },
        { word: 'scar', icon: '🩹', vi: 'sẹo' },
        { word: 'heal', icon: '💊', vi: 'chữa lành' },
        { word: 'pills', icon: '💊', vi: 'thuốc viên' },
        { word: 'drugs', icon: '💉', vi: 'thuốc' },
        { word: 'nurse', icon: '👩‍⚕️', vi: 'y tá' },
        { word: 'clinic', icon: '🏥', vi: 'phòng khám' },
        { word: 'health', icon: '💚', vi: 'sức khỏe' },
        { word: 'fit', icon: '💪', vi: 'khỏe' },
        { word: 'energy', icon: '⚡', vi: 'năng lượng' },
        { word: 'power', icon: '⚡', vi: 'sức mạnh' },
        { word: 'force', icon: '💥', vi: 'lực' },
        { word: 'might', icon: '💪', vi: 'quyền lực' },
        { word: 'strength', icon: '💪', vi: 'sức mạnh' },
        { word: 'muscle', icon: '💪', vi: 'cơ bắp' },
        { word: 'bones', icon: '🦴', vi: 'xương' },
        { word: 'skull', icon: '💀', vi: 'đầu lâu' },
        { word: 'spine', icon: '🦴', vi: 'cột sống' },
        { word: 'ribs', icon: '🦴', vi: 'xương sườn' },
        { word: 'joint', icon: '🦴', vi: 'khớp' },
        { word: 'elbow', icon: '💪', vi: 'khuỷu tay' },
        { word: 'wrist', icon: '🤚', vi: 'cổ tay' },
        { word: 'ankle', icon: '🦶', vi: 'mắt cá' },
        { word: 'knees', icon: '🦵', vi: 'đầu gối' },
        { word: 'toes', icon: '🦶', vi: 'ngón chân' },
        { word: 'heels', icon: '👠', vi: 'gót chân' },
        { word: 'soles', icon: '👟', vi: 'lòng bàn chân' },
        { word: 'thumb', icon: '👍', vi: 'ngón cái' },
        { word: 'palms', icon: '🤲', vi: 'lòng bàn tay' },
        { word: 'nails', icon: '💅', vi: 'móng tay' },
        { word: 'chin', icon: '😊', vi: 'cằm' },
        { word: 'cheek', icon: '😊', vi: 'má' },
        { word: 'forehead', icon: '😊', vi: 'trán' },
        { word: 'brows', icon: '🤨', vi: 'lông mày' },
        { word: 'lashes', icon: '👁️', vi: 'lông mi' },
        { word: 'pupil', icon: '👁️', vi: 'con ngươi' },
        { word: 'iris', icon: '👁️', vi: 'mống mắt' },
        { word: 'sight', icon: '👀', vi: 'thị lực' },
        { word: 'sound', icon: '🔊', vi: 'âm thanh' },
        { word: 'smell', icon: '👃', vi: 'mùi' },
        { word: 'taste', icon: '👅', vi: 'vị' },
        { word: 'touch', icon: '👆', vi: 'chạm' },
        { word: 'sense', icon: '🧠', vi: 'giác quan' },
        { word: 'think', icon: '🤔', vi: 'suy nghĩ' },
        { word: 'dream', icon: '💭', vi: 'mơ' },
        { word: 'sleep', icon: '😴', vi: 'ngủ' },
        { word: 'awake', icon: '👁️', vi: 'thức' },
        { word: 'yawn', icon: '🥱', vi: 'ngáp' },
        { word: 'tired', icon: '😴', vi: 'mệt' },
        { word: 'rest', icon: '😌', vi: 'nghỉ' },
        { word: 'relax', icon: '😌', vi: 'thư giãn' },
        { word: 'peace', icon: '☮️', vi: 'hòa bình' },
        { word: 'quiet', icon: '🤫', vi: 'yên tĩnh' },
        { word: 'hush', icon: '🤫', vi: 'im lặng' },
        { word: 'still', icon: '🧘', vi: 'bất động' },
        { word: 'pause', icon: '⏸️', vi: 'tạm dừng' },
        { word: 'stops', icon: '🛑', vi: 'dừng' },
        { word: 'brake', icon: '🚦', vi: 'phanh' },
        { word: 'yield', icon: '⚠️', vi: 'nhường đường' },
        { word: 'merge', icon: '🔀', vi: 'hợp nhất' },
        { word: 'split', icon: '✂️', vi: 'tách' },
        { word: 'cross', icon: '✝️', vi: 'băng qua' },
        { word: 'paths', icon: '🛤️', vi: 'lối đi' },
        { word: 'roads', icon: '🛣️', vi: 'đường' },
        { word: 'route', icon: '🗺️', vi: 'tuyến đường' },
        { word: 'trips', icon: '🧳', vi: 'chuyến đi' },
        { word: 'tours', icon: '🗺️', vi: 'du lịch' },
        { word: 'visit', icon: '🚶', vi: 'thăm' },
        { word: 'guest', icon: '🎩', vi: 'khách' },
        { word: 'hosts', icon: '🏠', vi: 'chủ nhà' },
        { word: 'party', icon: '🎉', vi: 'tiệc' },
        { word: 'event', icon: '📅', vi: 'sự kiện' }
    ],
    intermediate: [
        // 6 letters with icons
        { word: 'dragon', icon: '🐉', vi: 'rồng' },
        { word: 'rocket', icon: '🚀', vi: 'tên lửa' },
        { word: 'castle', icon: '🏰', vi: 'lâu đài' },
        { word: 'friend', icon: '👫', vi: 'bạn' },
        { word: 'flower', icon: '🌸', vi: 'hoa' },
        { word: 'button', icon: '🔘', vi: 'nút' },
        { word: 'cookie', icon: '🍪', vi: 'bánh quy' },
        { word: 'jungle', icon: '🌴', vi: 'rừng rậm' },
        { word: 'monkey', icon: '🐵', vi: 'khỉ' },
        { word: 'purple', icon: '💜', vi: 'màu tím' },
        { word: 'yellow', icon: '💛', vi: 'màu vàng' },
        { word: 'orange', icon: '🍊', vi: 'màu cam' },
        { word: 'winter', icon: '⛄', vi: 'mùa đông' },
        { word: 'summer', icon: '🌞', vi: 'mùa hè' },
        { word: 'spring', icon: '🌷', vi: 'mùa xuân' },
        { word: 'autumn', icon: '🍂', vi: 'mùa thu' },
        { word: 'forest', icon: '🌳', vi: 'rừng' },
        { word: 'island', icon: '🏝️', vi: 'đảo' },
        { word: 'pirate', icon: '🏴‍☠️', vi: 'cướp biển' },
        { word: 'wizard', icon: '🧙', vi: 'pháp sư' },
        { word: 'magics', icon: '✨', vi: 'phép thuật' },
        { word: 'turtle', icon: '🐢', vi: 'rùa' },
        { word: 'rabbit', icon: '🐰', vi: 'thỏ' },
        { word: 'hamster', icon: '🐹', vi: 'chuột cảnh' },
        { word: 'lizard', icon: '🦎', vi: 'thằn lằn' },
        { word: 'spider', icon: '🕷️', vi: 'nhện' },
        { word: 'parrot', icon: '🦜', vi: 'vẹt' },
        { word: 'peacock', icon: '🦚', vi: 'công' },
        { word: 'flamingo', icon: '🦩', vi: 'hồng hạc' },
        { word: 'turkey', icon: '🦃', vi: 'gà tây' },
        { word: 'chicken', icon: '🐔', vi: 'gà' },
        { word: 'rooster', icon: '🐓', vi: 'gà trống' },
        { word: 'oyster', icon: '🦪', vi: 'hàu' },
        { word: 'lobster', icon: '🦞', vi: 'tôm hùm' },
        { word: 'planet', icon: '🪐', vi: 'hành tinh' },
        { word: 'saturn', icon: '🪐', vi: 'sao Thổ' },
        { word: 'meteor', icon: '☄️', vi: 'thiên thạch' },
        { word: 'clouds', icon: '☁️', vi: 'mây' },
        { word: 'sunset', icon: '🌅', vi: 'hoàng hôn' },
        { word: 'cherry', icon: '🍒', vi: 'anh đào' },
        { word: 'banana', icon: '🍌', vi: 'chuối' },
        { word: 'tomato', icon: '🍅', vi: 'cà chua' },
        { word: 'potato', icon: '🥔', vi: 'khoai tây' },
        { word: 'carrot', icon: '🥕', vi: 'cà rốt' },
        { word: 'pepper', icon: '🌶️', vi: 'ớt' },
        { word: 'garlic', icon: '🧄', vi: 'tỏi' },
        { word: 'onions', icon: '🧅', vi: 'hành' },
        { word: 'cheese', icon: '🧀', vi: 'phô mai' },
        { word: 'butter', icon: '🧈', vi: 'bơ' },
        { word: 'waffle', icon: '🧇', vi: 'bánh quế' },
        { word: 'hotdog', icon: '🌭', vi: 'xúc xích' },
        { word: 'burger', icon: '🍔', vi: 'bánh mì kẹp' },
        { word: 'french', icon: '🍟', vi: 'khoai tây chiên' },
        { word: 'pretzel', icon: '🥨', vi: 'bánh xoắn' },
        { word: 'bagels', icon: '🥯', vi: 'bánh vòng' },
        { word: 'bottle', icon: '🍼', vi: 'chai' },
        { word: 'teapot', icon: '🫖', vi: 'ấm trà' },
        { word: 'guitar', icon: '🎸', vi: 'ghi-ta' },
        { word: 'violin', icon: '🎻', vi: 'vĩ cầm' },
        { word: 'trophy', icon: '🏆', vi: 'cúp' },
        { word: 'soccer', icon: '⚽', vi: 'bóng đá' },
        { word: 'basket', icon: '🏀', vi: 'rổ' },
        { word: 'tennis', icon: '🎾', vi: 'quần vợt' },
        { word: 'boxing', icon: '🥊', vi: 'quyền anh' },
        { word: 'skiing', icon: '⛷️', vi: 'trượt tuyết' },
        { word: 'hammer', icon: '🔨', vi: 'búa' },
        { word: 'wrench', icon: '🔧', vi: 'cờ lê' },
        { word: 'magnet', icon: '🧲', vi: 'nam châm' },
        { word: 'ladder', icon: '🪜', vi: 'thang' },
        { word: 'bucket', icon: '🪣', vi: 'xô' },
        { word: 'baskets', icon: '🧺', vi: 'giỏ' },
        { word: 'candle', icon: '🕯️', vi: 'nến' },
        { word: 'toilet', icon: '🚽', vi: 'nhà vệ sinh' },
        { word: 'shower', icon: '🚿', vi: 'vòi hoa sen' },
        { word: 'window', icon: '🪟', vi: 'cửa sổ' },
        { word: 'mirror', icon: '🪞', vi: 'gương' },
        { word: 'pillow', icon: '🛏️', vi: 'gối' },
        { word: 'cactus', icon: '🌵', vi: 'cây xương rồng' },
        { word: 'bamboo', icon: '🎋', vi: 'cây tre' },
        { word: 'clover', icon: '🍀', vi: 'cỏ ba lá' },
        { word: 'farmer', icon: '🧑‍🌾', vi: 'nông dân' },
        { word: 'doctor', icon: '👨‍⚕️', vi: 'bác sĩ' },
        { word: 'police', icon: '👮', vi: 'cảnh sát' },
        { word: 'artist', icon: '🧑‍🎨', vi: 'họa sĩ' },
        { word: 'singer', icon: '🧑‍🎤', vi: 'ca sĩ' },
        { word: 'dancer', icon: '💃', vi: 'vũ công' },
        { word: 'jokers', icon: '🃏', vi: 'chú hề' },
        { word: 'clowns', icon: '🤡', vi: 'hề' },
        { word: 'ninjas', icon: '🥷', vi: 'ninja' },
        { word: 'zombie', icon: '🧟', vi: 'xác sống' },
        { word: 'genies', icon: '🧞', vi: 'thần đèn' },
        { word: 'elves', icon: '🧝', vi: 'yêu tinh' },
        { word: 'santas', icon: '🎅', vi: 'ông già Noel' },
        { word: 'cupids', icon: '💘', vi: 'thần tình yêu' },
        { word: 'attack', icon: '⚔️', vi: 'tấn công' },
        { word: 'defend', icon: '🛡️', vi: 'phòng thủ' },
        { word: 'battle', icon: '⚔️', vi: 'trận chiến' },
        { word: 'rescue', icon: '🦸', vi: 'giải cứu' },
        { word: 'heroes', icon: '🦸', vi: 'anh hùng' },
        { word: 'leader', icon: '👑', vi: 'lãnh đạo' },
        { word: 'member', icon: '👤', vi: 'thành viên' },
        { word: 'people', icon: '👥', vi: 'mọi người' },
        { word: 'family', icon: '👨‍👩‍👧‍👦', vi: 'gia đình' },
        { word: 'parent', icon: '👨‍👩‍👧', vi: 'cha mẹ' },
        { word: 'mother', icon: '👩', vi: 'mẹ' },
        { word: 'father', icon: '👨', vi: 'cha' },
        { word: 'sister', icon: '👧', vi: 'chị em gái' },
        { word: 'brother', icon: '👦', vi: 'anh em trai' },
        { word: 'babies', icon: '👶', vi: 'em bé' },
        { word: 'nephew', icon: '👦', vi: 'cháu trai' },
        { word: 'cousin', icon: '👧', vi: 'anh chị em họ' },
        { word: 'uncles', icon: '👨', vi: 'chú bác' },
        { word: 'aunts', icon: '👩', vi: 'cô dì' },
        { word: 'grands', icon: '👴', vi: 'ông bà' },
        { word: 'senior', icon: '👵', vi: 'người cao tuổi' },
        { word: 'junior', icon: '👶', vi: 'trẻ nhỏ' },
        { word: 'student', icon: '🎓', vi: 'học sinh' },
        { word: 'teacher', icon: '👨‍🏫', vi: 'giáo viên' },
        { word: 'school', icon: '🏫', vi: 'trường học' },
        { word: 'campus', icon: '🏛️', vi: 'khuôn viên trường' },
        { word: 'office', icon: '🏢', vi: 'văn phòng' },
        { word: 'worker', icon: '👷', vi: 'công nhân' },
        { word: 'manage', icon: '👔', vi: 'quản lý' },
        { word: 'helper', icon: '🤝', vi: 'người giúp đỡ' },
        { word: 'assist', icon: '🆘', vi: 'hỗ trợ' },
        { word: 'supply', icon: '📦', vi: 'cung cấp' },
        { word: 'demand', icon: '📈', vi: 'cầu' },
        { word: 'market', icon: '🏪', vi: 'chợ' },
        { word: 'buyer', icon: '🛒', vi: 'người mua' },
        { word: 'seller', icon: '💰', vi: 'người bán' },
        { word: 'money', icon: '💵', vi: 'tiền' },
        { word: 'wallet', icon: '👛', vi: 'ví' },
        { word: 'pocket', icon: '🎒', vi: 'túi' },
        { word: 'saving', icon: '💰', vi: 'tiết kiệm' },
        { word: 'budget', icon: '💵', vi: 'ngân sách' },
        { word: 'income', icon: '💸', vi: 'thu nhập' },
        { word: 'profit', icon: '📈', vi: 'lợi nhuận' },
        { word: 'growth', icon: '📊', vi: 'tăng trưởng' },
        { word: 'change', icon: '🔄', vi: 'thay đổi' },
        { word: 'update', icon: '🆕', vi: 'cập nhật' },
        { word: 'upload', icon: '⬆️', vi: 'tải lên' },
        { word: 'online', icon: '🌐', vi: 'trực tuyến' },
        { word: 'search', icon: '🔍', vi: 'tìm kiếm' },
        { word: 'browse', icon: '🌐', vi: 'duyệt web' },
        { word: 'email', icon: '📧', vi: 'thư điện tử' },
        { word: 'message', icon: '💬', vi: 'tin nhắn' },
        { word: 'signal', icon: '📶', vi: 'tín hiệu' },
        { word: 'mobile', icon: '📱', vi: 'điện thoại di động' },
        { word: 'tablet', icon: '📱', vi: 'máy tính bảng' },
        { word: 'laptop', icon: '💻', vi: 'máy tính xách tay' },
        { word: 'screen', icon: '🖥️', vi: 'màn hình' },
        { word: 'button', icon: '🔘', vi: 'nút bấm' },
        { word: 'volume', icon: '🔊', vi: 'âm lượng' },
        { word: 'muted', icon: '🔇', vi: 'tắt tiếng' },
        { word: 'record', icon: '⏺️', vi: 'ghi âm' },
        { word: 'replay', icon: '🔁', vi: 'chơi lại' },
        { word: 'repeat', icon: '🔂', vi: 'lặp lại' },
        { word: 'random', icon: '🔀', vi: 'ngẫu nhiên' },
        { word: 'shuffle', icon: '🔀', vi: 'xáo trộn' },
        { word: 'select', icon: '☑️', vi: 'chọn' },
        { word: 'choice', icon: '✅', vi: 'sự lựa chọn' },
        { word: 'option', icon: '⚙️', vi: 'tùy chọn' },
        { word: 'prefer', icon: '⭐', vi: 'thích hơn' },
        { word: 'flavor', icon: '🍦', vi: 'hương vị' },
        { word: 'season', icon: '🌸', vi: 'mùa' },
        { word: 'months', icon: '📅', vi: 'tháng' },
        { word: 'weekday', icon: '📆', vi: 'ngày trong tuần' },
        { word: 'monday', icon: '1️⃣', vi: 'thứ hai' },
        { word: 'friday', icon: '5️⃣', vi: 'thứ sáu' },
        { word: 'sunday', icon: '☀️', vi: 'chủ nhật' },
        { word: 'moment', icon: '⏱️', vi: 'khoảnh khắc' },
        { word: 'second', icon: '⏱️', vi: 'giây' },
        { word: 'minute', icon: '⏲️', vi: 'phút' },
        { word: 'period', icon: '⏰', vi: 'thời kỳ' },
        { word: 'always', icon: '♾️', vi: 'luôn luôn' },
        { word: 'rarely', icon: '🌙', vi: 'hiếm khi' },
        { word: 'never', icon: '🚫', vi: 'không bao giờ' },
        { word: 'often', icon: '🔄', vi: 'thường xuyên' },
        { word: 'usually', icon: '✔️', vi: 'thường thì' },
        { word: 'normal', icon: '😐', vi: 'bình thường' },
        { word: 'common', icon: '👥', vi: 'phổ biến' },
        { word: 'unique', icon: '💎', vi: 'độc nhất' },
        { word: 'special', icon: '✨', vi: 'đặc biệt' },
        { word: 'simple', icon: '⭕', vi: 'đơn giản' },
        { word: 'tricky', icon: '🤹', vi: 'khó khăn' },
        { word: 'clever', icon: '🧠', vi: 'thông minh' },
        { word: 'genius', icon: '💡', vi: 'thiên tài' },
        { word: 'stupid', icon: '🤪', vi: 'ngu ngốc' },
        { word: 'silly', icon: '🤡', vi: 'ngớ ngẩn' },
        { word: 'funny', icon: '😂', vi: 'buồn cười' },
        { word: 'jokes', icon: '😆', vi: 'truyện cười' },
        { word: 'riddle', icon: '❓', vi: 'câu đố' },
        { word: 'puzzle', icon: '🧩', vi: 'trò chơi ghép hình' },
        { word: 'secret', icon: '🤫', vi: 'bí mật' },
        { word: 'hidden', icon: '👁️', vi: 'ẩn giấu' },
        { word: 'reveal', icon: '🎭', vi: 'tiết lộ' },
        { word: 'expose', icon: '💡', vi: 'vạch trần' },
        { word: 'uncover', icon: '🔍', vi: 'khám phá' },
        { word: 'notice', icon: '👀', vi: 'chú ý' },
        { word: 'ignore', icon: '🙈', vi: 'phát hờ' },
        { word: 'listen', icon: '👂', vi: 'lắng nghe' },
        { word: 'silent', icon: '🤫', vi: 'im lặng' },
        { word: 'noises', icon: '🔊', vi: 'tiếng ồn' },
        { word: 'shouts', icon: '📢', vi: 'la hét' },
        { word: 'whisper', icon: '🤫', vi: 'thì thầm' },
        { word: 'speaks', icon: '🗣️', vi: 'nói' },
        { word: 'talks', icon: '💬', vi: 'trò chuyện' },
        { word: 'chats', icon: '💭', vi: 'tán gẫu' },
        { word: 'debate', icon: '🗣️', vi: 'tranh luận' },
        { word: 'argues', icon: '🤬', vi: 'cãi nhau' },
        { word: 'fights', icon: '🥊', vi: 'đánh nhau' },
        { word: 'boxing', icon: '🥊', vi: 'môn quyền anh' },
        { word: 'karate', icon: '🥋', vi: 'môn karate' },
        { word: 'judo', icon: '🥋', vi: 'môn judo' },
        { word: 'sports', icon: '⚽', vi: 'thể thao' },
        { word: 'games', icon: '🎮', vi: 'trò chơi' },
        { word: 'hobbies', icon: '🎨', vi: 'sở thích' },
        { word: 'crafts', icon: '✂️', vi: 'đồ thủ công' },
        { word: 'skills', icon: '💪', vi: 'kỹ năng' },
        { word: 'talent', icon: '⭐', vi: 'tài năng' },
        { word: 'expert', icon: '🎓', vi: 'chuyên gia' },
        { word: 'master', icon: '👑', vi: 'bậc thầy' },
        { word: 'rookie', icon: '🆕', vi: 'tay mới' },
        { word: 'novice', icon: '🌱', vi: 'người mới bắt đầu' },
        { word: 'begins', icon: '▶️', vi: 'bắt đầu' },
        { word: 'starts', icon: '🏁', vi: 'khởi đầu' },
        { word: 'finish', icon: '🏁', vi: 'hoàn thành' },
        { word: 'ending', icon: '🔚', vi: 'kết thúc' },
        { word: 'closes', icon: '🚪', vi: 'đóng lại' },
        { word: 'opens', icon: '🔓', vi: 'mở ra' },
        { word: 'locked', icon: '🔒', vi: 'khóa lại' },
        { word: 'safety', icon: '🦺', vi: 'sự an toàn' },
        { word: 'danger', icon: '⚠️', vi: 'nguy hiểm' },
        { word: 'hazard', icon: '☢️', vi: 'rủi ro' },
        { word: 'caution', icon: '⚠️', vi: 'cẩn thận' },
        { word: 'alerts', icon: '🚨', vi: 'cảnh báo' },
        { word: 'alarms', icon: '⏰', vi: 'chuông báo' },
        { word: 'sirens', icon: '🚨', vi: 'tiếng còi' },
        { word: 'rescue', icon: '🚁', vi: 'giải cứu' },
        { word: 'saving', icon: '🦸', vi: 'cứu giúp' },
        { word: 'guards', icon: '💂', vi: 'bảo vệ' },
        { word: 'shield', icon: '🛡️', vi: 'lá chắn' },
        { word: 'armors', icon: '🛡️', vi: 'giáp' },
        { word: 'helmet', icon: '⛑️', vi: 'mũ bảo hiểm' },
        { word: 'gloves', icon: '🧤', vi: 'găng tay' },
        { word: 'boots', icon: '👢', vi: 'giày ống' },
        { word: 'uniform', icon: '👔', vi: 'đồng phục' },
        { word: 'costume', icon: '🎭', vi: 'trang phục' },
        { word: 'outfit', icon: '👗', vi: 'bộ quần áo' },
        { word: 'fashion', icon: '👠', vi: 'thời trang' },
        { word: 'styles', icon: '💅', vi: 'phong cách' },
        { word: 'trends', icon: '📈', vi: 'xu hướng' },
        { word: 'modern', icon: '🆕', vi: 'hiện đại' },
        { word: 'vintage', icon: '📻', vi: 'cổ điển' },
        { word: 'retro', icon: '🕹️', vi: 'phục cổ' },
        { word: 'classic', icon: '🎩', vi: 'kinh điển' },
        { word: 'timeless', icon: '⏳', vi: 'vượt thời gian' },
        { word: 'forever', icon: '♾️', vi: 'mãi mãi' },
        { word: 'eternal', icon: '💍', vi: 'vĩnh cửu' },
        { word: 'endless', icon: '∞', vi: 'vô tận' },
        { word: 'limits', icon: '🚧', vi: 'giới hạn' },
        { word: 'bounds', icon: '🔲', vi: 'ranh giới' },
        { word: 'border', icon: '🚧', vi: 'biên giới' },
        { word: 'edges', icon: '📐', vi: 'mép' },
        { word: 'corner', icon: '📐', vi: 'góc' },
        { word: 'center', icon: '🎯', vi: 'trung tâm' },
        { word: 'middle', icon: '⏸️', vi: 'giữa' },
        { word: 'inside', icon: '📥', vi: 'bên trong' },
        { word: 'outside', icon: '📤', vi: 'bên ngoài' },
        { word: 'nearby', icon: '📍', vi: 'gần đây' },
        { word: 'faraway', icon: '🌍', vi: 'xa xôi' },
        { word: 'beyond', icon: '🌌', vi: 'xa hơn' },
        { word: 'across', icon: '🌉', vi: 'ngang qua' },
        { word: 'around', icon: '🔄', vi: 'xung quanh' },
        { word: 'beside', icon: '↔️', vi: 'bên cạnh' },
        { word: 'behind', icon: '⬅️', vi: 'đằng sau' },
        { word: 'before', icon: '⏮️', vi: 'trước đó' },
        { word: 'after', icon: '⏭️', vi: 'sau đó' },
        { word: 'during', icon: '⏸️', vi: 'trong khi' },
        { word: 'within', icon: '📦', vi: 'trong vòng' },
        { word: 'without', icon: '❌', vi: 'không có' },
        { word: 'toward', icon: '➡️', vi: 'hướng về' },
        { word: 'against', icon: '🚫', vi: 'chống lại' },
        { word: 'between', icon: '↔️', vi: 'giữa' },
        { word: 'through', icon: '🚇', vi: 'xuyên qua' },
        { word: 'tunnel', icon: '🚇', vi: 'đường hầm' },
        { word: 'bridge', icon: '🌉', vi: 'cầu' },
        { word: 'rivers', icon: '🌊', vi: 'con sông' },
        { word: 'streams', icon: '💧', vi: 'dòng suối' },
        { word: 'creeks', icon: '🏞️', vi: 'suối nhỏ' },
        { word: 'canyon', icon: '🏜️', vi: 'hẻm núi' },
        { word: 'valley', icon: '🏞️', vi: 'thung lũng' },
        { word: 'desert', icon: '🏜️', vi: 'sa mạc' },
        { word: 'oasis', icon: '🌴', vi: 'ốc đảo' },
        { word: 'plains', icon: '🌾', vi: 'đồng bằng' },
        { word: 'meadow', icon: '🌼', vi: 'đồng cỏ' },
        { word: 'fields', icon: '🌾', vi: 'cánh đồng' },
        { word: 'garden', icon: '🌺', vi: 'vườn' },
        { word: 'orchard', icon: '🍎', vi: 'vườn cây ăn quả' },
        { word: 'vineyard', icon: '🍇', vi: 'vườn nho' },
        { word: 'farming', icon: '🚜', vi: 'nông nghiệp' },
        { word: 'planting', icon: '🌱', vi: 'trồng cây' },
        { word: 'harvest', icon: '🌾', vi: 'thu hoạch' },
        { word: 'reaping', icon: '🌾', vi: 'gặt hái' },
        { word: 'gather', icon: '🧺', vi: 'tập hợp' },
        { word: 'collect', icon: '📦', vi: 'thu thập' },
        { word: 'sorting', icon: '🗂️', vi: 'sắp xếp' },
        { word: 'packing', icon: '📦', vi: 'đóng gói' },
        { word: 'storing', icon: '🏪', vi: 'cất giữ' },
        { word: 'keeping', icon: '🔐', vi: 'giữ gìn' },
        { word: 'holding', icon: '🤲', vi: 'nắm giữ' },
        { word: 'grasps', icon: '✊', vi: 'nắm chặt' },
        { word: 'grabs', icon: '👊', vi: 'chụp lấy' },
        { word: 'catches', icon: '🤾', vi: 'bắt được' },
        { word: 'throws', icon: '🤾', vi: 'ném' },
        { word: 'pitches', icon: '⚾', vi: 'tầng bóng' },
        { word: 'serves', icon: '🎾', vi: 'giao bóng' },
        { word: 'bounces', icon: '⚽', vi: 'nảy' },
        { word: 'dribble', icon: '🏀', vi: 'rê bóng' },
        { word: 'shoots', icon: '🏹', vi: 'bắn' },
        { word: 'scores', icon: '🎯', vi: 'ghi điểm' },
        { word: 'winning', icon: '🏆', vi: 'chiến thắng' },
        { word: 'victory', icon: '🎖️', vi: 'thắng lợi' },
        { word: 'success', icon: '✅', vi: 'thành công' },
        { word: 'failure', icon: '❌', vi: 'thất bại' },
        { word: 'defeat', icon: '😞', vi: 'thua cuộc' },
        { word: 'loser', icon: '😢', vi: 'người thua' },
        { word: 'winner', icon: '🥇', vi: 'người thắng' },
        { word: 'champ', icon: '🏆', vi: 'vô địch' },
        { word: 'medals', icon: '🥇', vi: 'huy chương' },
        { word: 'awards', icon: '🏅', vi: 'giải thưởng' },
        { word: 'prizes', icon: '🎁', vi: 'phần thưởng' },
        { word: 'reward', icon: '🎖️', vi: 'khen thưởng' },
        { word: 'bonus', icon: '💰', vi: 'tiền thưởng' },
        { word: 'extras', icon: '➕', vi: 'phụ thêm' },
        { word: 'addons', icon: '🔗', vi: 'tiện ích' },
        { word: 'plugins', icon: '🔌', vi: 'plugin' },
        { word: 'modules', icon: '🧩', vi: 'mô-đun' },
        { word: 'system', icon: '⚙️', vi: 'hệ thống' },
        { word: 'machine', icon: '🤖', vi: 'máy móc' },
        { word: 'engine', icon: '🔧', vi: 'động cơ' },
        { word: 'motors', icon: '⚙️', vi: 'mô-tơ' },
        { word: 'wheels', icon: '🛞', vi: 'bánh xe' },
        { word: 'axles', icon: '⚙️', vi: 'trục xe' },
        { word: 'gears', icon: '⚙️', vi: 'bánh răng' },
        { word: 'chains', icon: '⛓️', vi: 'dây xích' },
        { word: 'ropes', icon: '🪢', vi: 'dây thừng' },
        { word: 'cables', icon: '🔌', vi: 'dây cáp' },
        { word: 'wires', icon: '🔌', vi: 'dây điện' },
        { word: 'plugs', icon: '🔌', vi: 'phích cắm' },
        { word: 'sockets', icon: '🔌', vi: 'ổ cắm' },
        { word: 'outlets', icon: '🔌', vi: 'ổ điện' },
        { word: 'switch', icon: '🔀', vi: 'công tắc' },
        { word: 'toggle', icon: '🔘', vi: 'bật tắt' },
        { word: 'slider', icon: '🎚️', vi: 'thanh trượt' },
        { word: 'knobs', icon: '🎛️', vi: 'nút vặn' },
        { word: 'dials', icon: '☎️', vi: 'mặt số' },
        { word: 'meters', icon: '📏', vi: 'đồng hồ đo' },
        { word: 'gauges', icon: '⏱️', vi: 'máy đo' },
        { word: 'scales', icon: '⚖️', vi: 'cân' },
        { word: 'measure', icon: '📏', vi: 'đo lường' },
        { word: 'weight', icon: '⚖️', vi: 'cân nặng' },
        { word: 'heavy', icon: '🏋️', vi: 'nặng' },
        { word: 'light', icon: '🪶', vi: 'nhẹ' },
        { word: 'bright', icon: '💡', vi: 'sáng' },
        { word: 'shiny', icon: '✨', vi: 'sáng bóng' },
        { word: 'glossy', icon: '✨', vi: 'bóng loáng' },
        { word: 'matte', icon: '⬜', vi: 'mờ' },
        { word: 'smooth', icon: '🧊', vi: 'mịn' },
        { word: 'rough', icon: '🪨', vi: 'nhám' },
        { word: 'bumpy', icon: '🏔️', vi: 'gồ ghề' },
        { word: 'ridges', icon: '⛰️', vi: 'sống núi' },
        { word: 'grooves', icon: '📀', vi: 'rãnh' },
        { word: 'tracks', icon: '🛤️', vi: 'đường ray' },
        { word: 'trails', icon: '🥾', vi: 'đường mòn' },
        { word: 'routes', icon: '🗺️', vi: 'tuyến đường' },
        { word: 'voyage', icon: '🚢', vi: 'chuyến đi' },
        { word: 'journey', icon: '🧳', vi: 'hành trình' },
        { word: 'travels', icon: '✈️', vi: 'du lịch' },
        { word: 'flights', icon: '✈️', vi: 'chuyến bay' },
        { word: 'riding', icon: '🚴', vi: 'đạp xe' },
        { word: 'driving', icon: '🚗', vi: 'lái xe' },
        { word: 'cruising', icon: '🚢', vi: 'du thuyền' },
        { word: 'explore', icon: '🗺️', vi: 'khám phá' },
        { word: 'discover', icon: '🔍', vi: 'phát hiện' },
        { word: 'unearth', icon: '⛏️', vi: 'khai quật' },
        { word: 'digging', icon: '⛏️', vi: 'đào' },
        { word: 'mining', icon: '⛏️', vi: 'khai thác' },
        { word: 'tunnels', icon: '🚇', vi: 'đường hầm' },
        { word: 'shafts', icon: '🕳️', vi: 'giếng hầm' },
        { word: 'holes', icon: '🕳️', vi: 'cái lỗ' },
        { word: 'caves', icon: '🦇', vi: 'hang động' },
        { word: 'cavern', icon: '🏔️', vi: 'động lớn' },
        { word: 'grottos', icon: '🌊', vi: 'hang biển' },
        { word: 'depths', icon: '⬇️', vi: 'độ sâu' },
        { word: 'abyss', icon: '🕳️', vi: 'vực thẳm' },
        { word: 'bottom', icon: '⬇️', vi: 'đáy' },
        { word: 'floors', icon: '🏢', vi: 'tầng' },
        { word: 'ceilings', icon: '🏠', vi: 'trần nhà' },
        { word: 'roofs', icon: '🏠', vi: 'mái nhà' },
        { word: 'attics', icon: '🏠', vi: 'gác xép' },
        { word: 'basements', icon: '🏚️', vi: 'tầng hầm' },
        { word: 'garages', icon: '🚗', vi: 'nhà để xe' },
        { word: 'driveways', icon: '🚗', vi: 'đường lái xe' },
        { word: 'parking', icon: '🅿️', vi: 'bãi đỗ xe' },
        { word: 'station', icon: '🚉', vi: 'nhà ga' },
        { word: 'airport', icon: '✈️', vi: 'sân bay' },
        { word: 'seaport', icon: '⚓', vi: 'cảng biển' },
        { word: 'harbor', icon: '⚓', vi: 'cảng' },
        { word: 'marina', icon: '⛵', vi: 'bến du thuyền' },
        { word: 'docks', icon: '🚢', vi: 'bến tàu' },
        { word: 'wharfs', icon: '🏗️', vi: 'cầu tàu' },
        { word: 'piers', icon: '🌉', vi: 'cầu cảng' },
        { word: 'jetty', icon: '🌊', vi: 'đập chắn sóng' },
        { word: 'breakwater', icon: '🌊', vi: 'đê chắn sóng' },
        { word: 'lighthouse', icon: '🗼', vi: 'ngọn hải đăng' },
        { word: 'beacon', icon: '🔦', vi: 'đèn hiệu' },
        { word: 'signals', icon: '🚦', vi: 'tín hiệu' },
        { word: 'signs', icon: '🪧', vi: 'biển báo' },
        { word: 'symbols', icon: '♾️', vi: 'ký hiệu' },
        { word: 'icons', icon: '🎨', vi: 'biểu tượng' },
        { word: 'images', icon: '🖼️', vi: 'hình ảnh' },
        { word: 'pictures', icon: '🖼️', vi: 'bức tranh' },
        { word: 'photos', icon: '📷', vi: 'ảnh' },
        { word: 'snapshots', icon: '📸', vi: 'ảnh chụp' },
        { word: 'portraits', icon: '🖼️', vi: 'chân dung' },
        { word: 'selfies', icon: '🤳', vi: 'ảnh tự chụp' },
        { word: 'groupshot', icon: '👥', vi: 'ảnh nhóm' },
        { word: 'panorama', icon: '🌄', vi: 'ảnh toàn cảnh' },
        { word: 'scenery', icon: '🏞️', vi: 'phong cảnh' },
        { word: 'landscapes', icon: '🏞️', vi: 'phong cảnh thiên nhiên' },
        { word: 'vista', icon: '🌄', vi: 'tầm nhìn' },
        { word: 'horizon', icon: '🌅', vi: 'đường chân trời' },
        { word: 'skylines', icon: '🌆', vi: 'đường chân trời thành phố' },
        { word: 'cityscapes', icon: '🏙️', vi: 'cảnh quan thành phố' },
        { word: 'downtown', icon: '🏙️', vi: 'trung tâm thành phố' },
        { word: 'uptown', icon: '🏘️', vi: 'khu thượng lưu' },
        { word: 'suburbs', icon: '🏡', vi: 'ngoại ô' },
        { word: 'neighborhoods', icon: '🏘️', vi: 'khu phố' },
        { word: 'district', icon: '🗺️', vi: 'quận' },
        { word: 'regions', icon: '🗺️', vi: 'vùng' },
        { word: 'areas', icon: '📍', vi: 'khu vực' },
        { word: 'zones', icon: '🔲', vi: 'vùng' },
        { word: 'sectors', icon: '📊', vi: 'khu vực' },
        { word: 'segments', icon: '📏', vi: 'phân đoạn' },
        { word: 'sections', icon: '📑', vi: 'phần' },
        { word: 'chapters', icon: '📖', vi: 'chương' },
        { word: 'pages', icon: '📄', vi: 'trang' },
        { word: 'volumes', icon: '📚', vi: 'tập' },
        { word: 'series', icon: '📚', vi: 'loạt' },
        { word: 'collections', icon: '📚', vi: 'bộ sưu tập' },
        { word: 'library', icon: '📚', vi: 'thư viện' },
        { word: 'archive', icon: '🗃️', vi: 'kho lưu trữ' },
        { word: 'records', icon: '📝', vi: 'hồ sơ' },
        { word: 'documents', icon: '📄', vi: 'tài liệu' },
        { word: 'papers', icon: '📰', vi: 'giấy tờ' },
        { word: 'reports', icon: '📊', vi: 'báo cáo' },
        { word: 'charts', icon: '📊', vi: 'biểu đồ' },
        { word: 'graphs', icon: '📈', vi: 'đồ thị' },
        { word: 'tables', icon: '📋', vi: 'bảng' },
        { word: 'lists', icon: '📋', vi: 'danh sách' },
        { word: 'entries', icon: '📝', vi: 'mục nhập' },
        { word: 'items', icon: '📦', vi: 'mục' },
        { word: 'objects', icon: '🎁', vi: 'đối tượng' },
        { word: 'things', icon: '📦', vi: 'đồ vật' },
        { word: 'stuff', icon: '🎒', vi: 'thứ' },
        { word: 'goods', icon: '📦', vi: 'hàng hóa' },
        { word: 'products', icon: '🛍️', vi: 'sản phẩm' },
        { word: 'wares', icon: '🏪', vi: 'hàng hóa' }
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
