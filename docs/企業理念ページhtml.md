<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>新しい"価値基準"のインフラ設計図 - ideal Whitepaper</title>
    <!-- Load Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Configure Tailwind -->
    <script src="tailwind.config.js"></script>
    <!-- Custom Styles -->
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-background-dark text-gray-100 font-sans leading-relaxed">

    <!-- Fixed Header Navigation -->
    <header id="header-nav" class="fixed top-0 left-0 w-full z-50 shadow-xl border-b border-gray-700">
        <div class="container mx-auto px-4 py-4 flex flex-wrap justify-center sm:justify-between items-center">
            <h1 class="text-xl font-bold text-accent-gold tracking-wider uppercase mb-2 sm:mb-0">
                ideal whitepaper
            </h1>
            <nav class="flex flex-wrap justify-center space-x-4 text-sm font-medium">
                <a href="#vision" class="nav-link hover:text-accent-gold transition duration-300">0. Vision</a>
                <a href="#conflict" class="nav-link hover:text-accent-gold transition duration-300">1. Conflict</a>
                <a href="#philosophy" class="nav-link hover:text-accent-gold transition duration-300">2. Philosophy</a>
                <a href="#mechanism" class="nav-link hover:text-accent-gold transition duration-300">3. Mechanism</a>
                <a href="#structure" class="nav-link hover:text-accent-gold transition duration-300">4. Structure</a>
                <a href="#path" class="nav-link hover:text-accent-gold transition duration-300">5. Path</a>
                <a href="#declaration" class="nav-link hover:text-accent-gold transition duration-300">6. Declaration</a>
            </nav>
        </div>
    </header>

    <!-- Main Content Area -->
    <main class="pt-32 md:pt-24 pb-16">
        <div class="container mx-auto px-4 lg:px-8 max-w-5xl">

            <!-- Title Section -->
            <section class="text-center mb-4 md:8">
                <hgroup>
                    <p class="text-xs tracking-widest uppercase mb-2">Whitepaper v1.0</p>
                    <h2 class="text-3xl md:text-5xl font-extrabold text-accent-gold mb-2">
                        自由と秩序が両立した社会を設計する
                    </h2>
                    <h3 class="text-xl md-text-2xl  font-light">
                        正直であることが合理的な環境の設計へ
                    </h3>
                </hgroup>
                <div class="h-1 bg-gray-700 w-1/3 mx-auto mt-6 rounded-full"></div>
            </section>

            <!-- 序章0：目指す理想の未来（The Vision） -->
            <section id="vision" class="py-8 md:py-16 border-b border-gray-800">
                <p class="text-base md:text-lg font-semibold text-accent-gold mb-2">0. The Vision</p>
                <h2 class="text-xl md-text-2xl md:text-4xl font-bold mb-8">
                    はじめに
                </h2>
                
                <div class="space-y-6  text-base md:text-lg leading-relaxed">
                    <p>
                        目指すのは単一の理想郷ではなく、無数の理想郷が共存・進化できる『メタシステム』設計。
                    </p>
                    <p class="text-xl md-text-2xl font-bold text-gray-100">
                        現代社会は未成熟で、真の問題は<strong>「選択肢の欠如」</strong>にあると考えています。
                    </p>                   
                    <p>
                        これは既存システムとの共存・進化を促すもの。「正直者が報われ」「どの価値観で生きるか」を選べる自由を目指します。
                    </p>

                    <div class="p-4 rounded-lg border border-accent-gold/30 bg-section-bg/50">
                        <p class="mb-4">
                            このシステムの上では、各コミュニティ（DAO）が、自らの価値観に基づき「貢献の定義」や「公正さの形」を自由に設計できます。
                        </p>
                        <hr class="border-accent-gold/30 my-4">
                        <p>
                            そして、個人は自らの行動履歴を、プライバシーを守ったまま組織を超えて持ち運び、最も価値観の合うコミュニティを主体的に選択できるようにします。
                        </p>
                        <hr class="border-accent-gold/30 my-4">
                        <p>
                            個人のメリット追求行動が組織全体の価値創造に直結させ、人間が行う内部調整や監視コストをゼロに近づけ、人間の活動の大部分が組織発展のために使えるようになります。
                        </p>
                    </div>
                </div>
            </section>

            <section id="conflict" class="py-8 md:py-16 border-b border-gray-800">
                <p class="text-base md:text-lg font-semibold text-accent-gold mb-2">1. The Conflict</p>
                <h2 class="text-xl md-text-2xl md:text-4xl font-bold mb-8">
                    問題と課題
                </h2>
                <h3 class="text-xl md-text-2xl font-semibold  mb-6 border-l-4 border-accent-gold pl-4">高すぎる「信用のコスト」</h3>
                
                <div class="mb-12 p-6 md:p-8 rounded-xl bg-section-bg shadow-2xl border border-gray-700">
                    <h4 class="text-center text-lg md:text-2xl font-bold text-accent-gold mb-8 tracking-wider">
                        構造的矛盾が誘発する「不誠実の連鎖」
                    </h4>
                    
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                        
                        <div class="col-span-1 md:col-span-2 p-4 md:p-6 border-2 border-gray-600 rounded-xl text-center bg-gray-800 h-full flex flex-col justify-center">
                            <svg class="w-10 h-10 text-accent-gold mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.970 9.970 0 011.563-3.029m5.61 5.61L12 16a4 4 0 10-4-4"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.385 4.195L4.545 7.355M19.46 19.46l-3.23-3.23m-4.52-4.52l-4.52-4.52M21 12c-1.275 4.057-5.065 7-9.543 7-4.103 0-7.795-2.221-9.397-5"></path></svg>
                            <p class="text-base md:text-lg font-bold mb-1">貢献把握の限界</p>
                            <p class="text-sm">小さな貢献が評価できず、貢献者の不満が蓄積</p>
                        </div>
            
                        <div class="col-span-1 flex justify-center items-center h-full">
                             <div class="hidden md:block">
                                 <svg class="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                             </div>
                            <div class="md:hidden transform rotate-90">
                                 <svg class="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </div>
                        
                        <div class="col-span-1 md:col-span-2 p-4 md:p-6 border-2 border-gray-600 rounded-xl text-center bg-gray-800 h-full flex flex-col justify-center">
                            <svg class="w-10 h-10 text-accent-gold mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <p class="text-base md:text-lg font-bold mb-1">不正や怠惰の誘惑</p>
                            <p class="text-sm">短期利益や個人の利得を求めると、組織や集団への不誠実な行動が合理的となる</p>
                        </div>
                    </div>
                    
                    <div class="flex justify-center my-6">
                        <svg class="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                    </div>
            
                    <div class="p-5 border-2 border-red-600 rounded-xl text-center bg-red-900/40">
                         <svg class="w-10 h-10 text-red-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 11V9a2 2 0 012-2h0a2 2 0 012 2v2"></path></svg>
                        <p class="text-xl font-bold mb-1 text-red-300">信用コストの肥大化</p>
                        <p class="text-md text-red-400">監査・管理・監視コストが増大し、組織の合理性を意識した行動者が損をする悪循環</p>
                    </div>

                    <div class="mt-8 mb-12 ">
                        <h4 class="text-lg md:text-xl font-bold text-gray-100 border-l-4 border-accent-gold pl-4 mt-4 mb-4">
                            「正直者が報われない」構造の正体
                        </h4>
                        <div class="space-y-4 leading-relaxed bg-gray-800/50 p-6 rounded-md border border-gray-700">
                            <p>
                                悪循環の核心は、組織と個人が、それぞれ合理的に自身の利益を最大化しようとした結果、意図せず悪い結末を迎える点にあります。
                            </p>
                            <p>
                                <strong>組織への貢献者や誠実な活動者に対し、労いや部分的な還元にとどめ多くを搾取します。</strong>また個人の利益を優先する行動者のコストは、組織への貢献者と搾取した組織によって負担されます。
                            </p>
                            <p class="text-base md:text-lg font-bold">
                                この構造によって、有能で誠実な人材ほど、搾取され続けるか静かに組織を去っていくかのどちらかになる。これこそが、曖昧な評価基準や信用コストが引き起こす最も致命的な損失だと考えています。
                            </p>
                        </div>
                    </div>
            
                </div>
                <div class="my-16 accent-gold">
                    <h3 class="text-xl md-text-2xl font-semibold  mb-4 border-l-4 border-accent-gold pl-4">
                        そもそも「正当な評価」とは何か？
                    </h3>
                    <div class="space-y-4 ">
                        <p>
                            現在のシステムでは、人の生存が「収益」に依存しているため、<strong>本質的な価値創造よりも、短期的な収益確保が優先される</strong>という構造的欠陥を抱えています。
                            その結果、以下の具体例で示すように、社会のあらゆる場面で価値の目詰まりが発生しているのです。
                        </p>
                        <p>
                            これらの例は、単純な「善意が報われない」や「メリットデメリット」というだけの話ではありません。
                            <strong>社会の仕組み自体が、「本質的価値」をどう認識し、何をもって評価するのかという機能そのものを歪めてしまっている</strong>、より深刻な問題だと認識しています。
                        </p>
                    </div>
                </div>
                <div class="mt-16">
                    <h3 class="text-xl md-text-2xl font-semibold  mb-8 border-l-4 border-accent-gold pl-4">
                        日常に潜む「価値の目詰まり」の具体例
                    </h3>
                    <div class="grid md:grid-cols-3 gap-8">
                        
                        <div class="bg-section-bg p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-accent-gold/50 transition-all duration-300">
                            <div class="flex justify-center mb-4">
                                <svg class="w-12 h-12 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                            <h4 class="text-lg md:text-xl font-bold mb-3 text-center text-gray-100">地域社会</h4>
                            <p class="text-sm leading-relaxed">
                                ボランティアや自治会活動がもたらす価値。その真の受益者は、活動に直接関与しない<strong>「フリーライダー」</strong>や、その恩恵を暗黙的に享受する<strong>社会全体</strong>です。
                            </p>
                            <p class="text-sm leading-relaxed mt-2">
                                環境を提供し維持する貢献者の活動価値は可視化されず、彼らの経済的な豊かさに結びつくことはありません。
                            </p>
                            <p class="text-sm leading-relaxed mt-2">
                                皮肉なことに、この構造は、貢献する<strong>『内側の人』</strong>よりも、貢献せずに利益だけを享受する<strong>『外側の人』</strong>の方が、結果として欲望を満たしやすい社会を維持してしまっているのです。
                            </p>
                        </div>
                        
                        <div class="bg-section-bg p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-accent-gold/50 transition-all duration-300">
                            <div class="flex justify-center mb-4">
                                <svg class="w-12 h-12 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                            </div>
                            <h4 class="text-lg md:text-xl font-bold mb-3 text-center text-gray-100">組織内</h4>
                            <p class="text-sm leading-relaxed">
                                後輩への技術指導や部署を超えた情報共有。これらの活動が生み出す価値の真の受益者は、誰なのか。
                            </p>
                            <p class="text-sm leading-relaxed mt-2">
                                貢献した個人の努力は、「チームの成果」や「組織の生産性向上」といった、より大きな指標の中に吸収され、希釈されてしまいます。
                                貢献の源泉が誰であったかは、もはや誰にも分かりません。
                            </p>
                            <p class="text-sm leading-relaxed mt-2">
                                この構造は、個人が自身の評価を守るために「知識を共有しない」という、合理的な防衛行動を誘発します。
                                組織の長期的な成長を犠牲にしてでも、個人が短期的な自己利益を追求する事が合理的である。これもまた、貢献者から価値が一方的に吸い上げられる、紛れもない搾取の形の一部です。
                            </p>
                        </div>
                        
                        <div class="bg-section-bg p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-accent-gold/50 transition-all duration-300">
                            <div class="flex justify-center mb-4">
                                <svg class="w-12 h-12 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                            </div>
                            <h4 class="text-lg md:text-xl font-bold mb-3 text-center text-gray-100">企業間連携</h4>
                            <p class="text-sm leading-relaxed">
                                企業間取引における暗黙の前提は、共同での価値創造よりも、いかに自社の責任を回避し、リスクを相手に転嫁するかという、
                                <strong>徹底した防衛戦略</strong>が最大のコストになっています。
                            </p>
                            <p class="text-sm leading-relaxed mt-2">
                                その結果、生まれるのがリスク管理と称した責任の押し付け合いです。
                                複雑な契約書や厳しい監査は、万が一の際に相手を追及し、自らを守るための<strong>「法的武装」</strong>であり、
                                そのコストは本質的価値を生み出すための活動よりも大きなものになっているでしょう。
                            </p>
                            <p class="text-sm leading-relaxed mt-2">
                                この環境での最大の被害者は、常に<strong>誠実な事業者</strong>です。
                                相手を信頼し、真に価値を創造しようとする姿勢は非合理的な経営になりかねず、一方的にリスクと追加コストを背負わされる。
                                <strong>誠実さそのものが、経済的合理性を失う。</strong>社会全体の価値創造を停滞させる、深刻な問題なのです。
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div class="space-y-6  mt-16 text-base md:text-lg leading-relaxed">
                    <p>
                        これは個人の倫理観以前の<strong>システムそのものが「不誠実さ」を誘発している</strong>という状況なのです。
                    </p>
                    <p>
                        見えない貢献は無視され、正直者は報われない。その結果、誰もが不信感を前提に行動せざるを得なくなり、 社会全体が膨大な「信用コスト」を支払い続けています。
                        このコストこそが、『まじめさ』『誠実さ』『正直さ』を非合理的にし、創造性とイノベーションを阻害する最大の足枷となっていると考えています。
                    </p>
            
                    <blockquote class="border-l-4 border-accent-gold pl-6 py-2 my-8">
                        <p class="text-xl font-bold text-accent-gold italic">
                            経済活動での倫理観や信用は、構造的に既定されるべき
                        </p>
                    </blockquote>
                    
                    <p>
                        信用や個人、組織の倫理観に依存しない環境構築が、問題解決の第一歩です。
                        <strong>不誠実な行動を非合理にする新しいインフラを設計する。</strong>信用を利用できない環境にすることが、この問題に対して提示する解決策であると考えています。
                    </p>
                </div>
                </section>

                <section id="philosophy" class="py-8 md:py-16 border-b border-gray-800">
                    <p class="text-base md:text-lg font-semibold text-accent-gold mb-2">2. The Philosophy</p>
                    <h2 class="text-xl md-text-2xl md:text-4xl font-bold mb-8">
                        歪められた価値の再定義
                    </h2>
                    
                    <div class="space-y-8  text-base md:text-lg leading-relaxed">
                        <p>
                            なぜこのような矛盾が社会の当然として受け入れられているのか。
                            現代の社会システムが内包する、二つの代表的な構造的問題から解決が測れるのではないかと考えています。
                        </p>
                
                        <div>
                            <h3 class="text-xl md-text-2xl font-semibold  mb-4 border-l-4 border-accent-gold pl-4">
                                『能力』の強制的な社会保障化
                            </h3>
                            <div class="space-y-4 bg-section-bg p-6 rounded-lg border border-gray-700">
                                <p>
                                    現代日本の雇用システムでは、<strong>成果や能力を理由に正社員を解雇することは極めて困難です。</strong>これは本来、個人の生活を守るためのセーフティネットでした。
                                </p>
                                <p>
                                    しかし、この制度は意図せずして<strong>「有能で誠実な人間が生み出す価値の余剰が、価値を生まない人間のコストに強制的に再分配される」</strong>という仕組みを組織に強いています。
                                    組織は、このコストを払い続けなければならず、その原資は、本来報われるべき誠実な貢献者からの搾取によって賄われているのです。
                                </p>
                            </div>
                        </div>
                
                        <div>
                            <h3 class="text-xl md-text-2xl font-semibold  mb-4 border-l-4 border-accent-gold pl-4">
                                評価システムを歪める『温情主義』
                            </h3>
                            <div class="space-y-4 bg-section-bg p-6 rounded-lg border border-gray-700">
                                <p>
                                    <strong>能力の欠如や貢献の不足という事実から目を背け、評価そのものを歪めてしまう文化</strong>
                                </p>
                                <p>
                                    個々の得意不得意や向き不向きも含め、個別環境化での「無能」は罪ではない。しかし、その事実が曖昧な評価基準で「調整」され、二つの悲劇を生みます。
                                </p>
                                <div class="space-y-4 border-t border-gray-600 pt-4 mt-4">
                                        <p class="underline decoration-accent-gold underline-offset-4 decoration-2 mb-2"> 
                                            １，組織全体の評価基準を破壊し、誠実な貢献者の意欲を削いでしまうこと。
                                        </p>
                                        <p class="underline decoration-accent-gold underline-offset-4 decoration-2"> 
                                            ２，本来であれば適切な支援や別の道によって救われるべき個人から、その機会を奪ってしまうこと。
                                        </p>
                                </div>
                                </p>
                            </div>
                        </div>
                
                        <div>
                            <h3 class="text-xl md-text-2xl font-semibold  mb-4 mt-6 border-l-4 border-accent-gold pl-4">
                                評価をごまかす優しさは、誰も救わない。人が人を評価、判断しなくていい社会へ
                            </h3>
                            <div class="space-y-4">
                                <p>
                                    この構造的な問題や、それによって不自由を強いられる全てに対し、新しい評価の形が必要だと考えています。
                                    それは、<strong>「生きるために必要な評価」と「救済」をシステムレベルで完全に分離する</strong>ことからはじまります。
                                </p>
                                <ul class="list-disc list-inside space-y-3 ml-4">
                                    <li><strong>評価の絶対性：</strong>個人の貢献、能力、誠実さは、透明なロジックの下で絶対的に評価される。
                                        貢献や活動結果に対する報酬や対価は、この評価によってのみ得られるべきです。</li>
                                    <li><strong>救済の透明性：</strong>評価をごまかすのではなく、<strong>事実を認めた上で、尊厳ある評価と対応をする。</strong>
                                        </li>
                                </ul>
                                <p>
                                    誠実な貢献者が報われる環境と、得意不得意を含めた人間の一側面である活動の結果を明確にしてもなお、
                                    尊厳を失わずに生きていける社会を両立させるために、公的機関に留まらない社会全体でのセーフティネット構想が必要だと考えています。
                                </p>
                            </div>
                        </div>

                        <div class="mt-12">
                            <h3 class="text-xl md-text-2xl font-semibold  mb-6 border-l-4 border-accent-gold pl-4">
                                ラディカルな正直さの物理法則
                            </h3>
                            <div class="space-y-6  text-base md:text-lg leading-relaxed">
                                <p>
                                    <strong>「生きるために、正直な感情や行動を抑制しなければならない社会は、本当に成熟していると言えるのか？」</strong>
                                </p>
                        
                                <blockquote class="border-l-4 border-accent-gold pl-6 py-2 my-8">
                                    <p class="text-xl font-bold text-accent-gold italic">
                                        秩序のために「正直さ」を制限することではなく
                                        <br>
                                        あらゆる「正直さ」が、その結果と物理法則のように結びつく環境を設計するべき。
                                    </S>
                                </blockquote>
                                
                                <p>
                                    ここで言う「正直さ」とは、倫理的なものではありません。
                                    短期的な利益の追求、欲望、好き嫌いの表明、あるいは逃避。それらすべてが、人間のありのままの「正直な」行動です。
                                </p>
                                <p>
                                    それらの行動は禁止も否定もされるべきではない。しかし、すべての行動は、その結果として「活動履歴」に記録され、
                                    未来永続的に引き継がれることが必要だと考えます。
                                </p>
                                <p>
                                    メタシステム自体は、その行動を「善」とも「悪」とも判断しません。
                                    その判断は、自分が所属を選択した組織や集団（DAO）、自分自身の価値観に委ねられます。
                                </p>
                                <p>
                                    欲望に正直な行動が、あるDAOでは最大の貢献とみなされ、別のDAOではマイナスとみなされる。
                                    この<strong>「ラディカルな正直さの許容」</strong>と<strong>「価値観ごとの厳格な結果責任」</strong>の両立こそが、
                                    我々の設計する「正直さの物理法則」によって描かれる世界の断片です。
                                </p>
                        
                                <p class="mt-6 pt-6 border-t border-gray-700 font-bold text-accent-gold text-xl">
                                    個人の合理的な選択を、根本から変える。
                                </p>
                                <p>
                                    もはや、集団の価値観に合わせるために自分を偽り、摩擦コストを生み出す必要はありません。
                                </p>
                                <p class="font-bold text-gray-100">
                                    <strong>『正直さを隠して現在の集団に留まる』よりも、『ありのままの自分でいられる最適な集団（DAO）を探し、移動する』ことが合理的になる</strong>からです。
                                </p>
                                <p>
                                    個人はミスマッチからの解放、組織は内部摩擦の解消、双方にとっての最適解となる可能性があり、
                                    このメタシステムを通じて実現したい、次の進化を遂げた社会の姿です。
                                </p>
                            </div>
                        </div>
                    </section>    

            <section id="mechanism" class="py-8 md:py-16 border-b border-gray-800">
                <p class="text-base md:text-lg font-semibold text-accent-gold mb-2">3. The Mechanism</p>
                <h2 class="text-xl md-text-2xl md:text-4xl font-bold mb-8">
                    基本設計
                </h2>
            
                <div class="space-y-6  text-base md:text-lg leading-relaxed mb-12">
                    <p>
                        設計思想の中心は<strong>「貢献度測定（Proof of Contribution）」</strong>に集約されます。
                        これまで測定が難しかった本質的価値の測定や、「本質的価値と評価基準の明確化」こそが、
                        所属している全ての人の行動原理となり、結果、組織全体の原動力となるからです。
                    </p>
                    <p>
                        人間による評価は、リソースの限界と避けられないバイアスにより、実現したくても実現できないことによる不公平と搾取の温床となってしまっていました。
                        私たちは、この「人間とこれまでの技術よる評価の限界」を、<strong>AIとブロックチェーンが永続的に連携する「貢献度測定ツール」</strong>によって実現することを目指します。
                    </p>
                </div>
            
                
                <div class="p-6 md:p-8 rounded-xl bg-section-bg shadow-2xl border border-gray-700">
                    <h3 class="text-xl md-text-2xl font-semibold mb-6 border-l-4 border-accent-gold pl-4">
                        公正さを支える6つの絶対条件
                    </h3>
                    <p class=" mb-8">
                        この基盤は、以下の揺るぎない絶対条件（設計原則）の上に構築されます。一つでも欠ければ、このシステムは旧来の評価ツールと同じ運命を辿るでしょう。
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                            <p class="font-bold text-accent-gold">1. 透明性と自動化</p>
                            <p class="text-sm mt-1">意思決定プロセスと実行はプログラムにより自動化され、それらを全て誰もが検証可能な状態とし、
                                人間の恣意的な介入の実行を高コストな状態となっていること。</p>
                        </div>
                        <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                            <p class="font-bold text-accent-gold">2. 広範囲の影響と活動（貢献）の検知</p>
                            <p class="text-sm mt-1">AIが、広範囲に及ぶ影響と、人間には見過ごされる微細な貢献の両方を検知できること。</p>
                        </div>
                        <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                            <p class="font-bold text-accent-gold">3. 補正、調整システム</p>
                            <p class="text-sm mt-1">定量化による攻略活動が合理的とならない仕組みを導入・実現できること</p>
                        </div>
                        <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                            <p class="font-bold text-accent-gold">4. 中長期的に影響を反映させる仕組み</p>
                            <p class="text-sm mt-1">中長期的な貢献度が与える中長期的な影響を加味できること</p>
                        </div>
                        <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                            <p class="font-bold text-accent-gold">5. 進化する価値基準</p>
                            <p class="text-sm mt-1">時代や環境の変化に合わせ、コミュニティが透明なプロセスで価値基準を更新できること。</p>
                        </div>
                        <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                            <p class="font-bold text-accent-gold">6. プライバシーと透明性の両立</p>
                            <p class="text-sm mt-1">プロセスの透明性を担保しつつ、個人の心理的安全性を守るプライバシー保護がなされていること。</p>
                        </div>
                    </div>
                　</div>

                <h3 class="text-xl md-text-2xl font-semibold  mb-6 border-l-4 border-accent-gold pl-4 mt-8 md:mt-12">各工程</h3>
            
                <div class="space-y-12">
                    <div>
                        <h4 class="text-lg md:text-xl font-bold mb-4 text-accent-gold">1：AIによる貢献の『観測』</h4>
                        <p class="">AIによる多角的なデータ観測。人間では不可能だった活動範囲と貢献要素に対し、リアルタイムに感知し情報を集積するように設計します。</p>
                        <div class="overflow-x-auto rounded-lg shadow-2xl">
                            </div>
                    </div>
            
                    <div>
                        <h4 class="text-lg md:text-xl font-bold mb-4 text-accent-gold">2：ブロックチェーンによる『記録に基づく計算】と記録の保全</h4>
                        <p class=" mb-6">AIによって感知された情報は、ブロックチェーン上に「PoC要素」として刻まれます。
                            この情報を中長期的に貢献度測定の影響要素とすることで、貢献は一過性の評価ではなく、個人に永続的に紐づく"デジタル資産（負債）"となります。</p>
                        <div class="space-y-4  bg-section-bg p-6 rounded-lg border border-gray-700/50">
                            <p>このスコアは、組織に対して紐づくものではなく活動者個人に紐づくものとします。また組織の解散や組織の移動によってリセットされることはありません。
                                長期的な活動履歴の積み重ねが、個々人の価値観や評価基準の揺るがない情報となります。</p>
                        </div>
                    </div>
            
                    <div>
                        <h4 class="text-lg md:text-xl font-bold mb-4 text-accent-gold">3：スマートコントラクトによるインセンティブの『自動執行』</h4>
                        <p class=" mb-6">ブロックチェーンに記録されたPoC要素を基に既定の貢献度測定を行い、決められた計算に基づきスマートコントラクトがインセンティブを自動執行します。
                            ここには一切の人間的裁量や遅延は介在出来ないものとします。</p>
                        <div class="space-y-4 ">
                            <ul class="list-disc list-inside ml-4 space-y-2">
                                <li><b>トークンエコノミクス:</b> PoC要素に基づく結果に応じて執行されるインセンティブ報酬の移動は、トークンによって行われることで実現可能となります。</li>
                                <li><b>ガバナンス設計:</b> 各組織や集団ごとの意思決定プロセスに基づき、自由に投票方式やリワード（活動報酬）トークン活用が可能な環境を実現とします。</li>
                            </ul>
                            <p class="font-bold mt-4">この自動執行されたインセンティブの基となる要素が、中長期的にその個人のインセンティブに永続的に影響を与える仕組みとなることで、
                                一つ一つの判断や行動に中長期的な責任とリスクを発生させます。</p>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-lg md:text-xl font-bold mb-4 text-accent-gold">4：時間と範囲を超えた『影響の追跡』と『永続的フィードバック』</h4>
                        <p class=" mb-4">
                            AIは、記録された各行動（PoC要素）が、時間軸（数年、数十年）と影響範囲（チーム、組織、社会）において、どのような結果をもたらしたかを追跡・分析し続けます。
                        </p>
                        <p class="">
                            中長期的な影響分析の結果は、個人に紐づくデジタル資産にフィードバックされ、未来のインセンティブ計算に反映されます。
                            良い影響は将来の貢献度を高め、悪い影響はそれを減衰させる。これにより、短期的な「逃げ得」が合理的か未知数となり、
                            すべての活動者に対する『責任、リスク、報酬の分散化』実現に近づきます。
                        </p>
                    </div>
                
                    <div>
                        <h4 class="text-lg md:text-xl font-bold mb-4 text-accent-gold">5：価値基準の『自己進化』</h4>
                        <p class=" mb-4">
                            社会環境や時代の価値観は常に変化します。固定されたルールに縛られるのではなく、自ら進化し続けるように設計する必要があります。
                            重要なのは、柔軟に変更可能な要素と、変更が行えない要素の棲み分けを行うことです。
                        </p>
                        <p class="">
                            AIは、エコシステム全体の健全性や外部環境の変化を常に観測し、「現在の貢献度測定基準が、本当にDAOの掲げる価値観と一致しているか」を問い続けます。
                            その分析結果はコミュニティに提示され、透明なガバナンスプロセスを通じて、DAO自身が価値基準をアップデートしていくことに寄与します。
                        </p>
                    </div>

                    <div>
                        <h4 class="text-xl font-bold mb-4 text-accent-gold">ステップ6：プライバシーと透明性の『両立』</h4>
                        <p class="">
                            ゼロ知識証明（Zero-Knowledge Proofs）などの暗号技術を活用し、個々の行動の詳細（具体的な発言内容やコードの断片、活動履歴など）を秘匿したまま、
                            「その個人が持つデジタル資産」の内容をを証明し、ブロックチェーンに記録しておくことが可能になります。
                        </p>
                        <ul class="list-disc list-inside ml-4 space-y-2 text-sm text-white-700 mt-4">
                            <li>**プロセスは透明に：どのようなルール（スマートコントラクト）で貢献が評価され、インセンティブが執行されるかは、誰でも検証可能な状態とする。</li>
                            <li>**データは非公開に：その評価の根拠となった個々の具体的な行動データは、本人の同意なしに公開されることがないものとする。</li>
                        </ul>
                        <p class=" mt-4 font-bold">
                            この技術的な両立が、公正さへの信頼と個人の心理的安全性を同時に担保し、自分らしく貢献できる環境を実現するための鍵となります。
                        </p>
                    </div>
                </div>
            </section>

            <!-- 第3章：エコシステムが実現する環境と本質的構造（The Structure） -->
            <section id="structure" class="py-8 md:py-16 border-b border-gray-800">
                <p class="text-base md:text-lg font-semibold text-accent-gold mb-2">4. The Structure</p>
                <h2 class="text-xl md-text-2xl md:text-4xl font-bold mb-8">
                    価値観で進化する組織構造
                </h2>
            
                <div class="space-y-8  text-base md:text-lg leading-relaxed">
                    <h3 class="text-xl md-text-2xl font-semibold  mb-4 border-l-4 border-accent-gold pl-4">
                        「価値観による分岐の自由」へ
                    </h3>
                    <p>
                        DAOの本質は、善悪という単一の価値基準を押し付けることではありません。
                    </p>
                    <p>
                        重要なのは、<strong>組織内の意見の相違を、内部抗争や権力闘争といった破壊的な「対立」ではなく、創造的な「分岐（フォーク）」へと昇華させる</strong>ことにあります。
                        これは、各々が信じる理想やアプローチを追求するための、システムに組み込まれた基本的な仕組みです。
                        これは、内部抗争や権力闘争、現状維持にエネルギーを浪費するのではなく、各々が目指したい理想を追求するための、システムに組み込まれた基本的な仕組みです。
                    </p>

                    <h3 class="text-xl md:text-2xl font-semibold  mt-12 mb-4 border-l-4 border-accent-gold pl-4"> フォーク：二つの進化のかたち
                    </h3>
                    <p>
                        フォークは、主に二つの形で組織の健全な進化を促します。
                    </p>
                    <div class="grid md:grid-cols-2 gap-6 text-sm"> <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                            <p class="font-bold text-accent-gold mb-1">1. 価値観による分岐</p>
                            <p class="">組織の根本的な価値観やミッションとの間にズレが生じた場合、メンバーは自らの貢献履歴を保持したまま、新しい価値観を掲げる組織を立ち上げることができます。</p>
                        </div>
                        <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                            <p class="font-bold text-accent-gold mb-1">2. アプローチによる分岐</p>
                            <p class="">共通の価値観や目標は維持しつつも、その達成手段（戦略、戦術）について異なるアイデアを持つグループが、
                                それぞれの方法を試すために分岐することができます。</p>
                        </div>
                    </div>

                    <h3 class="text-xl md-text-2xl font-semibold  mb-4 border-l-4 border-accent-gold pl-4">
                        フォークが促す健全な進化のメカニズム
                    </h3>
                    <p>
                        この「フォークの権利」は、組織や所属する個人に自律的進化のメカニズムをもたらします。
                    </p>
                    
                    <ul class="list-disc list-inside space-y-4 ml-4">
                        <li>
                            <strong>価値観の一致が協力な引力を生む：</strong> 組織の方向性と自身の価値観がズレ始めたメンバーは、無理に内部で戦う必要はありません。
                            自身の活動履歴（価値持続スコア）を保持したまま、同じ価値観を持つ仲間と共に新しい組織をフォークできます。
                            これにより、最も貢献度の高いメンバーほど、最も自身の価値観と一致する組織へと自然に引き寄せられます。
                        </li>
                        <li>
                            <strong>健全な淘汰と多様性の創出：</strong> フォークは、元の組織からの単なる「離脱」ではありません。
                            それは、新しい価値観や創造性、技術やアイデアを持つ組織の誕生を意味します。
                            これにより、社会には多様な選択肢が生まれ、健全なエコシステムの形成が期待できます。
                        </li>
                        <li>
                            <strong>価値観の表明が組織の価値を強める：</strong> 運営者は常に『価値観を表明し続ける』事が重要となる。「腐敗しないように」や「体裁を整える」
                            と考えるのではなく、「コミュニティの価値観を共有し続けること」を常に考えます。
                            また、組織が採用するアプローチについても、メンバーとの継続的な対話と合意形成を意識します。
                            メンバーとの価値観の一致、成長や発展のためのプロセス、方向性など、魅力的な人材との一致こそが、組織そのものの価値や魅力に直結することが期待できます。
                        </li>
                    </ul>
                    
                    <p class="mt-8 pt-6 border-t border-gray-700">
                        フォーク"創造的な分岐の自由"こそが、DAOがもたらす最大の価値だと考えています。
                        組織内に設定された上下関係による顔色の伺いあいから、立場や役割が違う"対等な関係"を目指せる組織構造に技術を活用し、
                        個々人の価値観や得手不得手、やりたい事への正直な実行そのものが、組織の原動力へと変換される事を目指せます。
                    </p>
                </div>
            </section>

            <!-- 第4章：実現に向けたロードマップ（The Path） -->
            <section id="path" class="py-8 md:py-16 border-b border-gray-800">
                <p class="text-base md:text-lg font-semibold text-accent-gold mb-2">5. The Path</p>
                <h2 class="text-xl md-text-2xl md:text-4xl font-bold mb-8">
                    ロードマップ
                </h2>
            
                <div class="space-y-8  text-base md:text-lg leading-relaxed">
                    <h3 class="text-xl md-text-2xl font-semibold  mb-6 border-l-4 border-accent-gold pl-4">思想の具現化：100年続くインフラへの道筋</h3>
                    <p>
                        idealの行う活動は、<strong>技術の進化の先に起こることが予想される変化に対する、社会基盤構築するための長期的な研究開発計画</strong>です。
                    </p>
                    <p>
                        <strong>未来の誰もが使える「部品（プリミティブ）」を一つひとつ丹念に作り上げ、その有効性を徹底的に検証していく</strong>こと。
                        それが、ideal合同会社の『経営戦略』です。
                    </p>
                </div>
            
                <div class="mt-12 space-y-12">
                    
                    <div class="p-6 rounded-xl bg-section-bg border border-gray-700">
                        <h4 class="text-lg md:text-xl md-text-2xl font-bold text-accent-gold mb-4">フェーズ1：基礎研究とプロトタイプの構築</h4>
                        <p class=" mb-6">
                            この段階では、環境提供のために必要な要素をコードに変換するための開発・検証をします。
                        </p>
                        <ul class="list-disc list-inside space-y-4 ">
                            <li>
                                <strong>価値の定義と設計：</strong> 何を「貢献」とし、それに対してどのような対価（トークン等）を紐付けるのか。その価値交換システムの基本設計を確立します。
                            </li>
                            <li>
                                <strong>技術的基盤の確立：</strong> 貢献を検知するAIと、それを記録するブロックチェーンが連携するための、基本的なアーキテクチャを設計・検証します。
                            </li>
                            <li>
                                <strong>プライバシーと透明性の両立：</strong> ゼロ知識証明（zk-SNARKs等）の技術を活用し、貢献の事実は検証可能でありながら、個人のプライバシーを完全に保護する技術的アプローチを研究、検証します。
                            </li>
                        </ul>
                    </div>
            
                    <div class="p-6 rounded-xl bg-section-bg border border-gray-700">
                        <h4 class="text-lg md-text-2xl font-bold text-accent-gold mb-4">フェーズ2：AI仮想社会を活用したシミュレーション</h4>
                        <p class=" mb-6">
                            開発したプロトタイプを、現実世界を模したAIによる仮想社会（デジタルサンドボックス）に投入し、テストと調整を繰り返します。
                        </p>
                        <ul class="list-disc list-inside space-y-4 ">
                            <li>
                                <strong>多様な組織モデルでの検証：</strong> 数人規模のチームから数万人規模のコミュニティまで、様々な組織、社会モデルをシミュレートし、システムの有効性と限界を洗い出します。
                            </li>
                            <li>
                                <strong>報酬バランスの最適化：</strong> 貢献度に対する報酬の変数（インセンティブの強弱や時間経過による減衰率など）を動的に調整し、最も健全なエコシステムが生まれるパラメータを探求します。
                            </li>
                            <li>
                                <strong>耐攻撃性のストレステスト：</strong> あらゆる「攻略法」を試みる敵対的なAIエージェントを投入し、システムの免疫機能が正しく作動するかを徹底的にテストします。
                            </li>
                        </ul>
                    </div>
            
                    <div class="p-6 rounded-xl bg-section-bg border border-gray-700">
                        <h4 class="text-lg md-text-2xl font-bold text-accent-gold mb-4">フェーズ3：社会実験と実装へ</h4>
                        <p class=" mb-6">
                            技術そのものだけではなく<strong></strong>「中心に据える価値観を何にするか」</strong>によって、
                            「貢献の定義」と「公正さの形」がどう変わるのかという視点での検証を行い常に進化できる環境であることを確認、検証します。
                        </p>
                        <ul class="list-disc list-inside space-y-4 ">
                            <li>
                                <strong>価値観による適応性の検証：</strong> 「中心に据える価値観」によって、「貢献の定義」と「公正さの形」がどう変化し、システムがそれに適応できるかを検証します。
                            </li>
                            <li>
                                <strong>多様なユースケースでの実証：</strong> 個人の哲学、企業理念、社会課題解決など、様々な価値観を持つコミュニティでの適用可能性を実証します。
                            </li>
                        </ul>
                        
                        <p class=" mt-4">
                            DAOの実現に必要なのは『環境』であり、その環境に必要な要素を開発し、誰もが入手可能な状態とすることが、本格的な社会実装のスタートラインであり、当面の目標地点です。
                        </p>
                        <p class=" mt-4 font-bold">
                            持続可能で多様な組織の未来が形作られ、選択肢が広がる未来に必要なシステムとして機能するかの重要なフェーズです。
                        </p>
                    </div>
                </div>
                </section>

            <!-- 第5章：信用インフラ確立の再宣言（The Declaration） -->
            <section id="genesis" class="py-8 md:py-16 border-b border-gray-800">
                <div class="max-w-4xl mx-auto">
                    
                    <p class="text-base md:text-lg font-semibold text-accent-gold mb-2">6. The Genesis</p>
                    <h2 class="text-xl md-text-2xl md:text-4xl font-extrabold text-gray-100 mb-8">
                        技術の進化がもたらす新しい『最適化』
                    </h2>
                        
                        <h3 class="text-xl md-text-2xl font-semibold  mt-12 mb-4 border-l-4 border-accent-gold pl-4">
                            生き方の選択肢を増やしたい
                        </h3>
                        <p>
                            問題の本質は、既存のシステムが未成熟であること以上に、<strong>「そのシステム以外に、生きる術がない」という選択肢の欠如</strong>だと考えています。
                            社会的な進化とは、より優れたシステムへ強制的に移行させることだけではありません。
                            新たな「生き方の選択肢」を提示し、誰もが主体的に所属を選択できるようになることです。
                        </p>
            
                        <h3 class="text-xl md-text-2xl font-semibold  mt-12 mb-4 border-l-4 border-accent-gold pl-4">
                            技術が可能にする『新しい最適化』
                        </h3>
                        <p>
                            このメタシステムは、単なる理想論ではなく、AIとブロックチェーンという二つの技術革新によって初めて実現可能となった、新しい形の『最適化』に基づいています。
                        </p>
                        <div class="space-y-4 bg-section-bg p-6 rounded-lg border border-gray-700/50 mt-6">
                            <p class="font-bold text-accent-gold">人間だけでは不可能だった『観測』と『記録』：</p>
                            <ul class="list-disc list-inside ml-4 space-y-2 text-sm ">
                                <li><strong>AIによる継続的な観測：</strong> 人間には不可能なスケールで、あらゆる行動とその文脈、影響範囲を24時間365日観測し続けることが可能になった。</li>
                                <li><strong>ブロックチェーンによる永続的な記録：</strong> 観測された行動とその結果は、改ざん困難な履歴としてブロックチェーンに刻まれ、
                                    個人に紐づく『検証可能なアイデンティティ』ととして活用できる技術に応用できるようになった。</li>
                            </ul>
                            <p class="font-bold text-accent-gold mt-4">時間と範囲を超えた『影響測定』と『フィードバック』：</p>
                            <ul class="list-disc list-inside ml-4 space-y-2 text-sm ">
                                <li><strong>長期的な影響分析：</strong> AIとブロックチェーンにより、個々の行動、活動が時間（数年、数十年）と範囲（チーム、社会）を超えて
                                    どのような影響を与えたかを確認できるようになった。</li>
                                <li><strong>永続的なフィードバックループ：</strong> その結果は、未来のあらゆるインセンティブ計算に自動的に反映され、
                                    責任もリスクもメリットも公平に分散できる可能性を拡げました。</li>
                            </ul>
                        </div>
                        <p class="mt-6">
                            この「観測→記録→影響測定→フィードバック」を個人単位から社会全体を含めて永続的に行える環境は、
                            人間だけでは困難だった公正で長期的な最適化を可能にする技術的基盤です。
                        </p>
                        <p class="mt-4 mb-4">
                            そして、この技術革新によってもたらされた可能性を利用し、具体的な構成要素として、以下を設計します。
                        </p>
                        <ul class="list-decimal list-inside ml-4 space-y-3 "> <li>
                            <strong class="text-accent-gold text-base">AIによる貢献の観測・分析:</strong> <br>
                            AIが、ブロックチェーン上に記録した独自の価値基準（アルゴリズム）に基づき、貢献活動を観測できるように仕組みを実装。
                        </li>
                        <li>
                            <strong class="text-accent-gold text-base">ブロックチェーンへの貢献記録:</strong> <br>
                            観測された貢献要素（PoC要素）を、ブロックチェーン上に記録。
                        </li>
                        <li>
                            <strong class="text-accent-gold text-base">スマートコントラクトによる自動執行:</strong> <br>
                            ブロックチェーン上の記録をトリガーとし、事前に合意されたロジックに従ってスマートコントラクトがインセンティブを自動的に執行するように実装（人間の介入なし）。
                        </li>
                        <li>
                            <strong class="text-accent-gold text-base">完全な検証可能性:</strong><br>
                             AIの価値基準、記録された貢献要素、スマートコントラクトの実行結果など、全てが過去に遡って誰でも検証可能な状態に実装。
                        </li>
                        <li>
                            <strong class="text-accent-gold text-base">価値基準の更新可能性:</strong> <br>
                            AIの価値基準変更、貢献度測定に対する価値変数の変更など含め、DAOの透明なガバナンスプロセスを経て更新可能であり、その変更履歴もブロックチェーンに記録されるよう実装。
                        </li>
                        <li>
                            <strong class="text-accent-gold text-base">プライバシー保護と個人主権:</strong> <br>
                            ゼロ知識証明等を活用し、貢献の事実は検証可能にしつつ、具体的な行動内容は秘匿できるよう実装。
                            この検証可能な貢献履歴は、個人が主権を持つ形で（NFT等で）管理・活用できる「ポータブルな証明書」となるよう設計。
                        </li>
                        <li>
                            <strong class="text-accent-gold text-base">永続的なフィードバック:</strong> <br>
                            記録された履歴は長期的な影響分析に利用され、その結果が未来のインセンティブ計算に継続的にフィードバックされるよう設計。
                        </li>
                    </ul>
                    </div>           
                </div>
            </section>
        </div>
    </main>

    <!-- JavaScript for Smooth Scrolling -->
    <script src="script.js"></script>
</section>

<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>

<script>
  mermaid.initialize({ startOnLoad: true, theme: 'dark' });
</script>
</body>
</html>

</body>
</html>