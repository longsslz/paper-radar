# Paper Radar Digest

## 1. Flexible intelligent microwave metasurface with shape-guided adaptive programming
- Venue: Nature Communications
- Published: 2025-04-02
- Type: transferable
- Tags: tunable_metasurface, terahertz_microwave
- Score: 0.7742
- Core insight: 这篇 Nature Communications 工作的核心不是单个柔性超表面，而是把“形变感知-物理建模/学习-偏压重编程”做成闭环：柔性可重构微波超表面在弯曲后不再依赖固定几何下的码本，而是由贴合的形变传感阵列实时给出表面状态，再由 ANN 把形状、入射角、频率映射为偏压编码，维持波束、隐身和通信功能。
- Problem frame: 传统可重构超表面通常假设阵面几何稳定；一旦贴到曲面、被折弯或作为可穿戴/软体界面使用，meta-atom 的相位、耦合强度和局部入射角都会漂移，原码本失效。对 OECT/OMIEC × metasurface 路线而言，这正是核心系统问题：软材料带来可贴合性，但也带来状态漂移，必须让器件同时“感知自身状态”和“重写电磁功能”。
- First principles: 第一性原理上，超表面输出由每个亚波长单元的反射相位、幅度和阵列排布决定；弯曲会改变局部法向、单元间距和耦合，从而改变目标相位剖面。作者把形变场视为控制变量，用传感阵列测量几何，再用偏压改变变容管加载的 meta-atom 阻抗，使实际曲面上的相位分布重新逼近期望波前。
- Mechanism: 系统由三块组成：柔性 reconfigurable metasurface、geometry acquisition module 和 bias voltage supply module。文中给出的关键证据包括 32×16 单元阵列、覆盖频率/入射角/偏压的 190,000 个反射相位数据、ANN 测试损失约 0.015，以及从形状采集到偏压输出的实测全流程响应约 16.76 ms。应用验证包括电磁 illusion、carpet cloak 和 reflectarray/data transmission，说明闭环不是只在仿真里修相位，而能在微波实验中保持功能。
- Boundary advanced: 它推进的是“软可重构超表面的自感知控制边界”：从可弯曲但需人工重标定，推进到形状指导的自适应编码。局限也很清楚：当前仍是微波、列级偏压、外部 FPGA/电源/RS-232 限速，形变感知和超表面材料本身尚未一体化到离子/有机导体层；若迁移到 OECT/OMIEC，需要把电子偏压码本换成离子掺杂、电导/介电态和慢时变漂移的闭环模型。
- Old problem: 老问题是柔性电子和可重构超表面经常被分开处理：前者解决贴合，后者解决波前，但贴合后的几何变化会破坏波前。该文把几何变化纳入控制输入，直接回应“软硬件一体化后功能不稳定”的问题。
- Why it works: 它有效的原因是把形变导致的电磁偏差转化为可观测、可学习、可补偿的状态变量。只要传感阵列能及时读出曲面形状，且 meta-atom 的偏压-相位响应有足够覆盖范围，ANN 就能在实验校准空间内求出补偿编码，使系统输出回到目标散射/辐射模式。
- True novelty: 真正的新意不在“用 ANN 控制超表面”本身，而在把柔性超表面的瞬时形状作为码本生成的显式输入，并用同一平台展示 illusion、cloaking 和通信三类功能。对本方向的启发是：未来 OMIEC/OECT 超表面不应只追求材料可调，还要把材料状态、形变状态和波前任务放进同一个闭环控制问题。
- Evidence: 证据等级高：本地取得 Nature Communications PDF 全文和关键图。全文显示作者提出 FISP，包含柔性 RM、GAM、BSM；训练数据为 190,000 个反射相位值，ANN 低测试损失；系统实测响应约 16.76 ms；在 3.1/3.3 GHz 等微波条件下验证 illusion、carpet cloak、reflectarray 和视频传输。与 OECT/OMIEC 的直接材料重叠低，但对“自感知软超表面”架构高度相关。

## 2. A reconfigurable non-linear active metasurface for coherent wave down-conversion
- Venue: Nature Communications
- Published: 2025-02-26
- Type: transferable
- Tags: tunable_metasurface
- Score: 0.5646
- Core insight: 这篇论文把主动非线性超表面做成光到毫米波的相干下变频与波束形成平台：入射的 193 THz 光信号携带毫米波调制，经电子-光子芯片阵列同步检测、调相、放大并馈入贴片天线，最终在 28 GHz 形成可扫描波束并传输数据。
- Problem frame: 传统超表面多调控同频波的相位/幅度；通信、传感和计算系统却常需要跨频段转换、相干保持和波束成形同时发生。若未来 OECT/OMIEC 超表面要承担传感-计算-通信一体化任务，只靠被动/准静态调谐不够，必须理解非线性、时变和多物理接口如何把一个载波上的信息转移到另一个载波。
- First principles: 第一性原理是时变/非线性系统会产生频率混合；如果每个单元在转换后仍能控制相位，阵列就可以在新频段形成目标远场。该文用光电探测和电子相移把光载波上的数据调制映射到毫米波相位阵列，随后由天线阵列完成空间干涉叠加。
- Mechanism: 每个单元是 optically synchronized electronic-photonic chip 加微带贴片天线。调制光经微透镜耦合到芯片，芯片检测毫米波包络、调相、放大并路由到天线；阵列通过相邻单元相位差控制远场方向。全文证据显示样机在 28 GHz 辐射，光输入约 193 THz，二维方向扫描范围约 60°，并演示 32-QAM、2 Gb/s 的 fiber-wireless 链路。
- Boundary advanced: 它把超表面从“可调反射面”推进到“跨频相干接口”。边界在于当前是混合集成 proof-of-concept，依赖外部光耦合、芯片封装和天线阵列；规模、能耗、片上耦合损耗和阵列一致性决定是否能进入真实系统。对 OMIEC 而言，直接材料路线不同，但“非线性/时变单元 + 阵列相位控制”的设计语言非常可迁移。
- Old problem: 老问题是光纤链路、毫米波前端和波束控制常由多个独立模块完成，架构复杂且同步成本高。该工作尝试把下变频、相位调制和辐射孔径融合到超表面单元层级。
- Why it works: 它成立是因为信息从光调制转成毫米波电信号后，并没有丢失相干相位关系；每个单元可独立相移并相干辐射，远场波束由阵列因子决定。非线性转换负责频率维度，单元相移负责空间维度，两者叠加形成可通信的 steerable beam。
- True novelty: 新意在于把电子-光子下变频和主动相控阵做成 metasurface tile，而不是把超表面只作为末端天线或静态光学元件。它对本研究方向提示：OMIEC/OECT 的离子调控若能进入非线性或时变 regime，就可能不只调幅/调相，还能承担频率转换、调制和物理前端计算。
- Evidence: 证据等级高：本地有 Nature Communications PDF 全文和关键图。文本明确给出 193 THz 光入射、28 GHz 毫米波辐射、约 60° 方位/俯仰扫描、32-QAM 和 2 Gb/s 链路演示。与 OECT/OMIEC 无直接材料重叠，但与可重构超表面的 active nonlinear computing/communication 接口高度相关。

## 3. Integrated sensing and communication based on space-time-coding metasurfaces
- Venue: Nature Communications
- Published: 2025-02-21
- Type: direct
- Tags: tunable_metasurface, metasurface_computing, terahertz_microwave
- Score: 0.9089
- Core insight: 这篇工作把 space-time-coding metasurface 用作同一硬件上的通信与感知平台：基频波负责可靠通信，时空编码产生的空间分布谐波负责 sensing，从而避免再加独立传感器或单独控制链路。
- Problem frame: 集成感知与通信的瓶颈在于硬件重复：通信阵列、雷达/成像传感器、控制链路常分离，导致成本、功耗和系统复杂度上升。对 OECT/OMIEC × metasurface 方向，这个问题等价于：一个可编程物理界面能不能同时输出任务信号和自带感知信息，而不是只作为单功能调制器。
- First principles: 时变边界条件会把入射波能量散射到谐波频率；空间编码决定每个频率分量的波前。若把基频和谐波分别设计，基频可形成通信波束，谐波可被用作空间扫描、定位或成像信号。这里的计算不是数字后处理优先，而是把一部分多任务分离写进电磁边界条件。
- Mechanism: 作者提出 adjustable partitioning 和 full-aperture 两类编码策略，在 2-bit STCM 微波平台上实验验证。全文和摘要显示，STCM 同时操控 fundamental carrier 用于通信，并生成 spatially distributed harmonics 用于感知；实验结果与理论预测一致，面向 communication、imaging、radar 和 sensing。
- Boundary advanced: 它推进的是“可重构超表面作为多任务物理前端”的边界。局限在于材料/开关机制仍是微波可编程 metasurface 范式，距离有机离子电子材料的慢动力学和生物传感耦合还有距离；但它提供了一个很有价值的功能分解模板：把不同频率或时空通道分配给不同任务。
- Old problem: 老问题是 ISAC 往往用同一频谱但不同硬件或复杂后端实现，难以小型化和低功耗。该文把任务复用前移到超表面的时空编码层。
- Why it works: 它有效是因为 space-time coding 同时调制空间相位和时间序列，天然产生可控谐波；当谐波的方向图可设计时，传感不再需要额外发射孔径。基频保持通信质量，谐波承载 sensing，自然形成硬件复用。
- True novelty: 真正新意在于把谐波从“时变超表面的副产物”变成 sensing 资源，并与基频通信共同优化。对本方向的启发是：OMIEC/OECT 超表面中的慢离子/电化学状态也可能作为多时间尺度编码维度，服务感知、记忆和通信的分工。
- Evidence: 证据等级高：本地有 Nature Communications PDF 全文和关键图。摘要和全文明确说明 2-bit STCM 微波实验、基频通信、谐波感知、两类编码策略，以及实验与理论吻合。与 OECT/OMIEC 的材料耦合间接，但与 reconfigurable metasurface × sensing-computing integration 强相关。

## 4. Electrically programmable pixelated coherent mid-infrared thermal emission
- Venue: Nature Communications
- Published: 2025-02-15
- Type: transferable
- Tags: tunable_metasurface
- Score: 0.8482
- Core insight: 这篇工作实现了电可编程、像素化的相干中红外热发射超表面：Graphene FET 控制局部温度，金纳米天线/准 BIC/等离激元结构控制 emissivity，把温度调制和发射率调制耦合起来，形成可寻址的 2D 中红外发射像素阵列。
- Problem frame: 主动中红外超表面长期受限于材料少、调谐复杂、像素间串扰和电连接扩展困难。对 OMIEC/OECT 超表面而言，同样的问题会出现：有材料可调性不等于有像素级可扩展寻址，也不等于低串扰的场调控。
- First principles: 热发射的光谱/方向/偏振由局部温度和光学态密度/发射率共同决定；plasmonic meta-atom 与 quasi-bound states in the continuum 改变辐射通道，Graphene FET 改变局部 Joule heating 和电学边界。把二者同像素集成，就能用电信号同时调控温度和 emissivity，进而调制相干中红外输出。
- Mechanism: 器件由金 plasmonic nanoantenna、Al2O3 介质层、graphene channel 和底栅构成 metal-insulator-metal metasurface 像素。全文证据显示作者强调 graphene 的宽红外透明性、localized surface plasmon polariton 和 quasi-BIC 的 emissivity 控制，以及向低串扰 pixelated 2D array 的扩展；同时也指出 graphene 半金属性导致关断不完全和热串扰，需要双栅设计与材料/结构优化。
- Boundary advanced: 它推进的是可寻址主动红外 metasurface 的像素化边界，尤其是把电晶体管寻址与 meta-atom 光学态耦合。局限在于当前机制主要依赖热过程，速度受热扩散、基底和像素尺寸限制；对神经形态计算而言，它更适合作为空间可编程发射/传感前端，而不是直接高速突触。
- Old problem: 老问题是主动 metasurface 的调谐往往是全局或少通道的，难以形成密集独立像素；一旦像素化，电/热串扰又会破坏图案质量。该文把晶体管寻址、电热调制和光学发射结构放在同一个像素内处理。
- Why it works: 它有效是因为 graphene 同时可作为电热调制层和红外透明导电层，不严重遮挡目标中红外辐射；金纳米天线提供可设计的共振与 emissivity，FET 阵列提供像素级电控制。温度场和发射率场协同后，输出不只是亮度变化，而是波长、方向和偏振维度的相干调制。
- True novelty: 新意在于像素级 electrical programmability 与 coherent thermal emission 的结合，而不是单个可调红外单元。对 OECT/OMIEC 的真正启发是：离子/有机混合导体若要做 metasurface，需要从一开始考虑像素寻址、串扰、热/离子扩散和二维布线，而不是只展示单点调谐。
- Evidence: 证据等级高：本地有 Nature Communications PDF 全文和关键图。全文明确涉及 graphene FET、plasmonic nanoantenna、localized surface plasmon polaritons、quasi-BIC、pixelated 2D array、low crosstalk 和热串扰/关断比挑战。与 OECT/OMIEC 材料不同，但对可编程像素化超表面平台非常相关。

## 5. Abnormal beam steering with kirigami reconfigurable metasurfaces
- Venue: Nature Communications
- Published: 2025-02-15
- Type: transferable
- Tags: tunable_metasurface
- Score: 0.6257
- Core insight: 这篇工作用 kirigami rotation transformation 让机械可重构超表面同时调控晶格常数和局部反射相位，从而实现普通机械拉伸难以达到的异常波束翻转和分束。
- Problem frame: 机械可重构 metasurface 的常见问题是调参维度太少：拉伸或旋转通常只改变单元间距或局部单元状态的一部分，导致可达相位剖面有限。对软 OMIEC/OECT 超表面而言，机械自由度、离子电导自由度和局部相位自由度也会耦合，必须知道哪些自由度真正增加了可控波前空间。
- First principles: 反射波束由广义 Snell 定律和周期阵列衍射决定，依赖局部相位梯度和晶格常数。kirigami 变换同时改变 meta-atom 的空间位置与取向/相位，因此不只是拉伸孔径，而是在几何和相位两个层面重写边界条件。
- Mechanism: 作者提出基于 RS kirigami 的机械超表面，同步调制三个自由度：反射相位 φ、Px 和 Py。全文证据显示他们设计并制作了 beam flipper 与 beam splitter 两个微波样机，实验结果与 full-wave simulation 一致；讨论部分也指出开缝带来的不期望透射模式和异常反射效率降低是边界问题。
- Boundary advanced: 它推进的是机械重构的可达波前边界：从单一形变参数到几何-相位协同调控。局限是 kirigami 开缝会引入透射损耗和机械结构约束；对于 OECT/OMIEC，如果叠加电化学调控，必须处理湿态机械稳定、离子扩散和重复循环可靠性。
- Old problem: 老问题是机械可重构方案通常可调范围大但波前自由度少，电调方案自由度高但软/大形变困难。该文用 kirigami 设计说明结构变形本身可以成为波前工程资源，而不是扰动。
- Why it works: 它有效是因为 kirigami 旋转把宏观拉伸转换成单元位置和局部相位的协同变化，反射相位剖面可以连续变化甚至重构；当设计目标与衍射模式匹配时，就能出现 beam flipping/splitting 这类异常 steering。
- True novelty: 新意在于把 kirigami 几何自由度转译为 metasurface 的相位和晶格自由度，而不是单纯做可拉伸载体。对本方向而言，它提示 OMIEC/OECT 软超表面可以把结构力学作为可计算状态变量，与电化学调制共同编码。
- Evidence: 证据等级高：本地有 Nature Communications PDF 全文和关键图。摘要和讨论明确包含 lattice constants、local reflection phases、kirigami rotation transformation、beam flipper、beam splitter、实验与 full-wave simulation 一致，以及 air gaps 导致透射/效率损失。与 OMIEC/OECT 的材料交集间接，但对软重构波前控制非常重要。

## 6. A guidance to intelligent metamaterials and metamaterials intelligence
- Venue: Nature Communications
- Published: 2025-01-29
- Type: transferable
- Tags: tunable_metasurface
- Score: 0.5609
- Core insight: 这篇综述把 intelligent metamaterials 和 metamaterials intelligence 分成双向关系：AI 可作为设计、控制和自驱动优化工具；反过来，metamaterials 可直接在物理空间执行 wave-based neural network、mathematical operation 和 logic operation。
- Problem frame: 本研究方向容易混淆两件事：用 AI 设计材料，和让材料/波场本身计算。该综述的价值在于给出清晰分层，帮助判断一篇论文是在做智能控制、材料反演，还是在做真正的物理计算。
- First principles: 超材料本质上是对 Maxwell 方程边界条件和传播算子的工程化；AI 本质上是函数逼近和优化。二者结合有两条路径：用 AI 学习从目标功能到结构/编码的逆映射；或让波传播、干涉、散射和非线性响应实现矩阵乘法、卷积、逻辑和推理。
- Mechanism: 综述按两大块组织：intelligent metamaterials 中，AI 用于 photonic design、self-driving applications 和 latent physics 挖掘；metamaterials intelligence 中，物理结构执行 wave-based neural network、mathematical operation、logic operation。作者同时点出 data curation、knowledge migration 和 practice-oriented issues 是未来挑战。
- Boundary advanced: 它不是单一实验突破，而是研究路线图。对 OECT/OMIEC × metasurface × neuromorphic physical computing 的边界贡献在于给出评价标准：真正先进的路线应把材料可调、波场传播和任务级推理连起来，而不只是把机器学习加到设计流程末端。
- Old problem: 老问题是“智能超材料”概念泛化过度，导致 AI 设计、可编程控制和物理计算被混称。该综述帮助把这些层级拆开，避免把控制算法误当成材料智能。
- Why it works: 它的解释力来自统一视角：同一套电磁操控结构既可以被 AI 设计，也可以作为模拟计算硬件。对于本方向，OECT/OMIEC 的慢离子记忆、可塑性和生物兼容性可以补足传统电磁超材料缺少内部状态和可学习动力学的问题。
- True novelty: 综述的新意不在提出某个器件，而在把 metamaterials intelligence 明确定义为物理空间中的计算、检测和推理，并把 future challenges 落到数据、迁移和实践部署。它给本方向提供了写作和选题框架。
- Evidence: 证据等级高：本地有 Nature Communications Review PDF 全文和关键图。全文明确提出 intelligent metamaterials/metamaterials intelligence 双向框架，列出 wave-based neural network、mathematical operation、logic operation 三类物理计算，并指出 data curation、knowledge migration 和 practice-oriented issues。

## 7. In situ training of an in-sensor artificial neural network based on ferroelectric photosensors
- Venue: Nature Communications
- Published: 2025-01-07
- Type: transferable
- Tags: integrated_system
- Score: 0.6056
- Core insight: 这篇工作展示了可原位训练的 in-sensor ANN：铁电光传感器既是感知元件又是可编程权重，配合双向闭环编程，在传感阵列内直接训练交通标志识别任务，并比 von Neumann 机器视觉系统快约 50 倍。
- Problem frame: in-sensor computing 的关键难题不是只把传感和计算放近，而是能否在传感器本体上稳定、可重复、细粒度地更新权重。对 OECT/OMIEC 神经形态感知来说，这正对应 OECT 突触/神经元最难的工程问题：离子态可塑性要足够快、可保持、低变异，并能闭环写入目标权重。
- First principles: 传感器若能把入射刺激转换为可存储、多级、可更新的电导/响应状态，就能把矩阵权重内嵌在感知平面，减少数据搬运。训练需要误差反馈与写入脉冲之间的可预测映射；闭环编程通过读-写-校正降低器件非理想性。
- Mechanism: FE-PS 器件具备自供能、<30 μs 快速响应、>4 bits 多级光响应、50 天保持、10^9 endurance、100 ns 写入、小循环/器件变异。作者使用 bi-directional closed-loop programming 精准更新权重，并在原位训练 ANN 控制原型自动车识别交通标志。
- Boundary advanced: 它推进的是“可训练感知硬件”的边界，而不只是 inference-only sensor。局限在于材料体系是铁电 photosensor，不是 OECT；训练规模和任务仍是原型级。对 OECT/OMIEC 的挑战是用离子电化学状态达到类似的写入速度、保持、耐久和低变异，同时保留生物/化学传感优势。
- Old problem: 老问题是多数类脑传感器只能展示固定权重或离线训练后的推理，真正设备级原位训练受器件噪声、非线性和写入误差限制。该文用闭环编程把器件非理想性纳入训练过程。
- Why it works: 它有效是因为 FE-PS 同时满足快响应、多级可编程和长期保持，闭环算法又把目标权重与实际器件状态之间的误差逐步压小。感知、存储和乘加权重共址，数据搬运减少，所以速度优势明显。
- True novelty: 新意在于 in-sensor 系统不是只做物理前向传播，而是在传感阵列本体上训练。对本方向的启发很直接：OECT/OMIEC 若要成为 neuromorphic physical computing 平台，必须展示可训练闭环，而不只是单器件突触曲线。
- Evidence: 证据等级高：本地有 Nature Communications PDF 全文和关键图。摘要和全文给出 <30 μs、>4 bits、50 days、10^9 endurance、100 ns write speed、约 0.66%/2.72% 变异、交通标志原位训练和约 50× 速度提升。与 OECT/OMIEC 材料不同，但对神经形态感知系统指标非常关键。

## 8. Partial coherence enhances parallelized photonic computing
- Venue: Nature
- Published: 2024-07-31
- Type: direct
- Tags: metasurface_computing
- Score: 0.5546
- Core insight: 这篇 Nature 论文反转了光计算中“越相干越好”的默认假设：适度降低光源相干性可以提升并行卷积的带宽利用和通道复用，在不显著牺牲精度的情况下扩大 photonic tensor core 的并行度。
- Problem frame: 光子计算常受干涉串扰、相干控制、热管理和反馈稳定性限制；高相干光源虽便于相位控制，却也可能让并行通道互相干扰。对 metasurface/OMIEC 物理计算而言，这提示我们不要只追求理想相干波前，而要把噪声、部分相干和材料弛豫作为可设计资源。
- First principles: 卷积/矩阵乘法可由光传播和叠加实现；相干性决定不同通道之间是否发生稳定干涉。降低相干度会削弱非目标通道的相干串扰，同时保留足够的信号相关性完成计算，因此可以换取更大的并行度。
- Mechanism: 作者在两个平台验证：相变材料 photonic memory tensor core 用并行卷积识别 10 名帕金森患者步态，实验准确率 92.2%；硅光 tensor core 嵌入 electro-absorption modulators，实现 0.108 TOPS 卷积并以 92.4% 准确率分类 MNIST。核心变量是 degree of coherence 对 bandwidth use 和 parallelism 的优化。
- Boundary advanced: 它推进的是光子物理计算的资源观：相干性不是单向越高越好，而是可调系统参数。局限是任务规模仍相对受控，且不是 metasurface 或 OECT 材料论文；但对于可重构超表面物理计算，尤其是多通道波场计算，它提供了关于串扰-并行度-精度权衡的重要边界。
- Old problem: 老问题是光计算系统为了避免误差不断提高相干控制要求，带来热稳定和反馈控制负担。该文说明部分相干可以降低这些要求并提升并行吞吐。
- Why it works: 它有效是因为部分相干降低了跨通道不必要的相干干涉，使多个卷积核/输入通道能共享物理带宽；计算误差没有随相干度下降线性恶化，反而在合适窗口内取得并行度和精度平衡。
- True novelty: 真正新意在于把 coherence 当作计算体系结构参数，而不是光源质量指标。对 OECT/OMIEC × metasurface 的启发是：离子材料的慢响应、噪声和部分记忆也可能不是缺陷，而是可用于 reservoir/物理计算的可调动态。
- Evidence: 证据等级高：本地有 Nature PDF 全文和关键图。全文给出 partially coherent light 提升 computing parallelism 的机制，并报告 Parkinson gait 92.2% 准确率、MNIST 92.4% 准确率和 0.108 TOPS 硅光卷积处理。与 OECT/OMIEC 间接相关，但对物理计算原理很强。

## 9. Organic electrochemical neurons for neuromorphic perception
- Venue: Nature Electronics
- Published: 2024-07-08
- Type: direct
- Tags: oect_omiec, neuromorphic_oect
- Score: 0.7765
- Core insight: 这篇 Nature Electronics Perspective 把 OECT 从“湿态传感晶体管/突触器件”推进到“organic electrochemical neuron”这一系统角色：利用 OMIEC 的离子-电子耦合、柔性、生物兼容性和多模态感知潜力，讨论它如何支撑可适应、可生物集成的 neuromorphic event-based sensing。
- Problem frame: OECT/OMIEC 神经形态感知面对的根本问题是如何把离子-电子耦合、突触/神经元动态和真实感知任务连接起来。官方页面摘要明确指出，硅或其他无机人工神经元限制了柔性、生物兼容性和多感官能力；这篇文章的问题意识正是用 OECT-based organic electrochemical neurons 重新组织神经形态传感与感知。
- First principles: OECT/OMIEC 的第一性原理是离子进入/退出有机混合导体改变掺杂态和沟道电导，从而把化学/生物/电刺激转化为带记忆和时间动力学的电信号。神经元功能通常需要阈值、积分、泄漏、尖峰或非线性响应；这些都可能由离子迁移、电容耦合和电化学掺杂动力学提供。
- Mechanism: 官方 HTML metadata 给出的机制框架是：以 organic electrochemical transistors 为基础构建 organic electrochemical neurons，考察这些神经元和系统如何模拟生物体的感知原则，并从材料、器件、电路和系统层面推进 adaptable and biointegrable neuromorphic event-based sensing。这里的重点不是某个单一性能数字，而是把 OECT 的离子动力学、电导可塑性和生物接口属性组织成感知系统架构。
- Boundary advanced: 它的先进性在于直接命中本方向的核心材料和计算层级：OECT/OMIEC 不再只是传感器或突触，而是被放入 neuron、event-based sensing 和 perception 的系统坐标中。证据边界也要讲清楚：当前本地仍未取得可解析 PDF 全文，因此不能确认具体器件结构、测试任务、能耗或准确率。
- Old problem: 老问题是有机电化学器件常被证明为单一传感器、突触曲线或低压 biointerface，却难以形成神经元级、感知任务级的系统叙事。该 Perspective 的价值是把 OECT 器件物理、类生物感知原则和神经形态系统路线放到同一张图里。
- Why it works: 这个路线成立的原因在于 OECT/OMIEC 的离子掺杂动力学天然提供时间积分、记忆、非线性、低电压操作和湿态生物接口；这些特性比纯无机电子神经元更适合贴近皮肤、植物、体液和多模态化学/生物信号的感知场景。
- True novelty: 真正新意不是提出一个单器件指标，而是把 organic electrochemical neurons 明确作为 neuromorphic sensing and perception 的平台单元来讨论，并把发展路径拆到 materials、devices、circuits 和 systems 四层。这正好对应本方向从材料态走向真实感知任务的路线图。
- Evidence: 证据等级中等偏低：本地研究包有 Nature Electronics 元数据、DOI 10.1038/s41928-024-01200-5、官方 PDF URL 和 publisher Fig.1；手动检查官方页面 HTML metadata 后补到摘要级证据，确认它是 Perspective，讨论 OECT-based organic electrochemical neurons、bioelectronic/robotic perception、living-organism sensory principles，以及 materials/devices/circuits/systems 层面的推进策略。但可解析 PDF 全文仍未进入本地包，所以不写具体性能数字。

## 10. Imperceptible augmentation of living systems with organic bioelectronic fibres
- Venue: Nature Electronics
- Published: 2024-05-24
- Type: transferable
- Tags: oect_omiec, bio_sensing
- Score: 0.7332
- Core insight: 这篇 Nature Electronics 工作把 PEDOT:PSS 有机生物电子纤维直接原位 tether 到皮肤、胚胎和植物等活体表面，形成开放、透气、可修复、可升级和可回收的 bioelectronic interface；其中包括 on-skin electrodes、skin-gated OECT 和植物/触觉增强接口。
- Problem frame: 传统柔性/可穿戴电子常用薄膜或预制器件贴附，容易遮挡皮肤感受、气体/水分交换和生物表面形变，也带来一次性电子废弃物。对 OECT/OMIEC × metasurface 方向，这篇解决的是材料界面前提：如果有机混合导体不能无扰贴合活体曲面，就很难进一步做生物耦合的感知-计算-波调控系统。
- First principles: PEDOT:PSS 是混合离子-电子导体，既能导电又能与电解质/皮肤离子环境耦合；纤维网络的开放几何降低遮挡和弯曲刚度，原位溶液 tethering 通过表面润湿和黏附把微纤维固定在复杂拓扑上。skin-gated OECT 则利用皮肤作为电解质/栅介质的一部分，使生物界面直接参与晶体管调制。
- Mechanism: 作者用 orbital spinning 生成基于 PEDOT:PSS、透明质酸和 PEO 的开放纤维网络，直接 tether 到指尖、鸡胚和植物表面。全文证据显示单根纤维 tethering 力约 10 μN，Mimosa pudica 不因沉积过程闭合；纤维可记录 ECG/EMG，可构成 breathable skin-gated OECT；损伤后可补纤维修复，纤维/LED 等组件可分离复用或回收。当前 stretchability 受 PEDOT:PSS/PEO 本征材料限制，但通过图案方向可把循环拉伸提升到约 15%。
- Boundary advanced: 它推进的是 OMIEC 生物接口形态边界：从平面薄膜和预制贴片，推进到原位生成、开放网络和活体表面适配。局限是电子功能仍以电极、OECT 和简单增强接口为主，尚未进入可重构电磁超表面；湿稳定性和拉伸性仍需保护层、材料组合和结构优化。
- Old problem: 老问题是生物电子接口在机械可贴合、低扰动、可维护和可持续之间难以兼得。该文用可原位生成的有机导电纤维，把贴附过程、器件形态和生命周期同时纳入设计。
- Why it works: 它有效是因为开放纤维网络把导电路径分散到低覆盖率结构中，既保持与生物表面的电接触，又保留气体/水分交换和触觉；PEDOT:PSS 的离子-电子混合导电性支持 OECT/生物电信号接口；原位 tethering 避免了预制器件转移到复杂表面时的应力和遮挡。
- True novelty: 新意不只是用 PEDOT:PSS 纤维，而是把活体表面的原位制造、OECT 功能、可修复升级和可回收生命周期连成一个 bioelectronic platform。对本方向的启发是：未来 OECT/OMIEC metasurface 若面向人体/植物/湿界面，材料结构必须同时满足感知、贴合、维护和环境约束。
- Evidence: 证据等级高：本地有 Nature Electronics PDF 全文和关键图。全文明确报告 PEDOT:PSS 纤维、on-skin ECG/EMG、skin-gated OECT、植物/触觉接口、约 10 μN tethering 力、鸡胚 24 h 生长观察、损伤修复、湿摩擦保护和约 15% 图案增强循环拉伸。与 metasurface 间接相关，但与 OECT/OMIEC 生物接口高度相关。
