tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                // 変更後の設定
                sans: [
                    'Yu Mincho',     // 游明朝 (Mac/Windowsの一部環境)
                    'Hiragino Mincho ProN', // ヒラギノ明朝 (Mac)
                    'MS PMincho',    // MS PMincho (Windows)
                    'serif',         // 最後のフォールバックとして「serif (明朝体)」を指定
                ],
            },
            colors: {
                'background-dark': '#18181b', // zinc-900
                'accent-gold': '#e6a117', // amber-400
                'section-bg': '#27272a', // zinc-800
            }
        }
    }
}