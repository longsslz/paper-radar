# Paper Radar Digest

## 1. Organic mixed ionic-electronic conductor device platforms for emerging biosensor application
- Venue: npj Biosensing
- Published: 2026-02-19
- Type: transferable
- Tags: bio_sensing
- Score: 0.618
- Core insight: 这篇 npj Biosensing Perspective 把 OMIEC/OECT 生物传感的瓶颈从“再做一个高灵敏器件”重新拉回材料-界面科学：OMIEC 的体相离子/电子混合导电确实适合水相、软组织和信号放大，但同一个体相掺杂机制也让器件暴露于生物污染、离子交叉敏感和长期漂移。对本方向最有价值的是它把材料分子设计、抗污染界面、选择性识别层、可降解/长期稳定和系统级智能处理放在同一张路线图中，而不是把 OECT 仅当作一个传感放大器。
- Problem frame: 如果 OECT/OMIEC 要进入可穿戴或植入式 sensing-computing integration，核心问题不是单次校准下的检测限，而是复杂生物流体中如何同时维持离子通道、电子通道、识别层和封装界面的可重复性。文章指出 biofouling 会阻碍离子流、降低灵敏度、产生假阳性/假阴性；这正是把 OMIEC 器件接入 metasurface/neuromorphic 前端时最容易被低估的系统误差源。
- First principles: OECT 与 OFET 的根本差异在于电解质离子进入 OMIEC 体相并调制电子载流子浓度，因此跨导高、可在水相低电压工作、能直接把离子/生物化学过程转成电信号。但体相可进入性意味着非目标蛋白、盐离子和界面重排也会进入同一个自由度；材料设计必须同时控制水合、离子选择性、聚合物微结构、掺杂稳定性和电子迁移。
- Mechanism: 全文围绕三个机制层展开：一是 OMIEC 体相掺杂提供信号放大和离子-电子转导；二是抗污染涂层、合成识别层或离子选择膜把目标生化事件从非特异吸附中分离出来；三是材料计算、机器学习和系统级集成被用于筛选聚合物、优化器件结构并向片上处理/neuromorphic circuits 过渡。文章没有展示新的单一器件性能冠军，而是把可转化 biosensor 平台所需的材料与系统变量串起来。
- Boundary advanced: 先进性在于它给 OECT/OMIEC 方向提供了“从材料到临床/现场系统”的问题清单，尤其强调 biofouling 与 operational instability 的耦合。边界也很明确：这是 Perspective，不是新实验平台；它没有提供 OMIEC 与 reconfigurable metasurface 的直接耦合实验，也没有证明闭环 neuromorphic physical computing，只能作为 OMIEC 生物界面设计和系统鲁棒性的依据。
- Old problem: 旧问题是 OECT 生物传感文献常把高跨导、低电压、水相工作当作足够理由，却把长期漂移、污染层阻塞、识别层老化和批间材料差异当作后处理或封装问题。
- Why it works: 它有用，是因为它把失效机制定位在 OMIEC 的同一物理优势上：材料越开放、越容易体相掺杂，就越需要分子级界面控制。这个视角能帮助筛选真正适合与 metasurface/智能前端耦合的 OMIEC，而不是只挑短期响应最高的材料。
- True novelty: 真正新意不是提出某个新 OECT，而是把 OMIEC biosensor 的 translation bottleneck 系统化为材料结构、界面污染、选择性识别、可制造性和智能处理的协同设计问题。对本项目而言，它提供了评价直接 OECT/metasurface 论文的底层 checklist。
- Evidence: 本地解析到约 7 万字符全文，文章开篇明确讨论 OMIEC 的 volumetric doping、biofouling、operational instability、OECT 与 OFET 差异，并在路线图中提到 on-chip data processing、neuromorphic computing 和 advanced sensor designs。关键图已保存在 output/figures/crossref_10_1038_s44328-025-00072-9_caption_p1.png。

## 2. Nonlinear light conversion and infrared photodetection with laser-printed plasmonic metasurfaces supporting bound states in the continuum
- Venue: Light Science & Applications
- Published: 2026-01-02
- Type: transferable
- Tags: none
- Score: 0.7917
- Core insight: 这篇 Light: Science & Applications 论文展示了可规模化的 femtosecond-laser printed 金属 qBIC metasurface：在薄 Au 膜上直接形成 hollow nanobump 阵列，得到高 Q plasmonic quasi-BIC，用于增强三次谐波并提升 HgTe quantum-dot 红外光电晶体管探测。对本方向的启发是：可图案化、高 Q、可直接集成在晶体管电极上的 metasurface 可以成为“光学预处理/增益层”，虽不是 OMIEC，但形态上接近 sensing-computing 前端。
- Problem frame: 传统高 Q metasurface 常依赖昂贵多步纳米加工，难以与器件电极和大面积传感阵列共形集成；红外探测器又需要同时解决吸收增强、响应速度和可制造性。文章把问题设定为用单步激光打印把 qBIC 光场约束直接写入器件结构。
- First principles: BIC/qBIC 的物理基础是辐射损耗受对称性与结构参数调控，在临界耦合附近电磁场在纳米结构附近强烈增强。非线性转换效率随局域场增强急剧增加；当 metasurface 与 HgTe 量子点有源层/电极共址时，增强吸收和更短载流子路径可以同时改善 detectivity 与响应。
- Mechanism: 作者用飞秒激光在 50 nm Au 薄膜上打印规则 hollow nanobump 阵列，通过红外光谱、角分辨 THG 和建模证明 qBIC 模式；在临界耦合下，相比平滑 Au 膜实现约 10^5 的 THG 增强。随后把 qBIC metasurface 印在 HgTe quantum dot field-effect transistor 的源漏电极区域，使器件在 200 K、5 V bias 下在 qBIC 光谱区域达到约 8.7e11 Jones detectivity 并具备快速响应。
- Boundary advanced: 先进性在于 maskless、single-step、与 transistor geometry 直接兼容，而不是单独制备光学样品。边界是材料体系为 Au/HgTe QD、工作温度 200 K，且 metasurface 主要是被动/几何固定的 qBIC 增强结构，并非电化学可重构 OMIEC metasurface；neuromorphic computing 只属于可迁移架构想象。
- Old problem: 旧问题是高 Q metasurface 的实验性能常被精细纳米加工、低吞吐和与有源器件脱耦限制；红外探测器中 metasurface 增强也经常停留在光谱吸收示范，未进入晶体管器件层。
- Why it works: 它能工作是因为 qBIC 把光场局域和窄带共振结合起来，激光打印又把结构放在器件最需要增强的源漏/有源区附近。临界耦合让入射能量更有效地进入有损有源层，而不是仅形成高反射共振。
- True novelty: 真正新意在“低复杂度制备 + qBIC 非线性增强 + 晶体管探测器集成”的组合。对于 OECT/OMIEC 方向，可借鉴的是把可制造 metasurface 当作器件电极/前端的一部分，而不是外挂光学元件。
- Evidence: 本地有摘要与约 5.8 万字符全文。文本报告 measured Q-factor up to 20、THG enhancement about 10^5、HgTe QD FET at 200 K and 5 V、specific detectivity around 8.7e11 at the plasmonic-qBIC spectral region。关键图已保存为 output/figures/openalex_W7118022173_caption_p2.png。

## 3. Metasurface-assisted bioelectronics: bridging photonic innovation with biomedical implants
- Venue: Light Science & Applications
- Published: 2025-11-24
- Type: transferable
- Tags: tunable_metasurface, bio_sensing, terahertz_microwave
- Score: 0.7941
- Core insight: 这篇 Perspective 讨论 metasurface-assisted bioelectronics，核心观点是用亚波长结构对光场、THz 场和波前做像素级控制，从而让植入式或贴附式 bioelectronic interfaces 获得无线、空间选择性和更低侵入性的刺激/读出能力。它是本方向的场景桥梁：把 metasurface 从通信/成像推向 retinal、cochlear、cardiac 和 neural interfaces。
- Problem frame: 传统植入式刺激和神经接口依赖导线、电极或直接电刺激，空间/时间选择性有限且侵入性强。文章提出的问题是：能否用 photonic/metasurface 结构把能量、相位和吸收分布精确投送到生物组织或微型植入体上，实现更灵活的无线控制。
- First principles: metasurface 通过亚波长散射单元控制电磁波的相位、振幅、偏振和局域吸收；在可见/近红外可增强 photoelectrical stimulation，在 THz 可用于组织成像、热调制或局域释放，在可重构实现中还可借助 FPGA/holography 做场分布动态调节。生物电子侧则依赖细胞膜电位、光电/热电转换和组织耦合。
- Mechanism: 文章把 metasurface 集成到 biomedical implants 的多个层次：增强光刺激、控制波前、调节局部电场分布、用 THz patches 或 reconfigurable metasurfaces 实现无线通信/刺激，并展望与 VR-assisted design、holography 和 bio-MEMS 的结合。它主要是概念与综述性整合，不是单一实验闭环。
- Boundary advanced: 先进性在于明确把 metasurface 的 field engineering 能力映射到 bioelectronic medicine 的需求上。边界也同样重要：全文是 Perspective，本地全文虽完整但没有新的 OMIEC/OECT 器件；所谓 reconfigurable 与 FPGA/holography 更多是系统愿景或引用工作，不能当作已实现的 OMIEC-metasurface neuromorphic hardware。
- Old problem: 旧问题是 bioelectronics 与 photonic metasurface 往往分别发展：前者重电极/材料兼容，后者重光学波前/吸收控制，缺少一套把两者工程需求互译的框架。
- Why it works: 它成立的物理理由是组织刺激和传感本质上需要空间选择性能源/信号耦合，而 metasurface 正好能在薄层结构中编码空间电磁响应。若未来和软材料/OMIEC 结合，OMIEC 可负责离子-电子转导，metasurface 可负责无线/光学前端选择性。
- True novelty: 真正贡献是提出跨域设计框架，而非具体性能突破。对本项目的价值在于给“reconfigurable metasurface × bioelectronic interface”的应用边界、机会和夸大风险建立词汇表。
- Evidence: 本地有摘要与约 5.5 万字符全文。摘要和引言明确提到 pixel-wise electric field distribution、polarization/frequency/phase tuning、retinal/cochlear/cardiac implants、THz patches、FPGA/holography 和 wireless control。关键图已保存为 output/figures/openalex_W4416608880_caption_p2.png。

## 4. 3R-stacked transition metal dichalcogenide non-local metasurface for efficient second-harmonic generation
- Venue: Nature Photonics
- Published: 2025-10-27
- Type: transferable
- Tags: none
- Score: 0.498
- Core insight: 这篇 Nature Photonics 论文用 3R-stacked MoS2 制作 non-local metasurface，绕开传统二维半导体二次谐波受原子层厚度和相位匹配限制的问题。其要点是：把高 χ(2) 层状半导体做成亚波长 metastructure，并利用 non-local optical resonances 的大面积面内离域与局域场增强，在 160 nm 厚结构上实现显著 SHG 增强。
- Problem frame: 单层 TMD 的二阶非线性很强，但原子级厚度导致转换效率极低；增加厚度又会遇到相位失配。已有 quasi-phase-matched 3R-MoS2 stack 能提升效率，但结构更厚、更复杂。本文瞄准的问题是：能否用薄的 patterned 3R-MoS2 metasurface 在片上尺度提升二次谐波效率。
- First principles: SHG 效率与二阶极化、有效相互作用长度、局域场和相位关系相关。3R 堆垛破缺反演对称性，使多层 TMD 的二阶响应不相互抵消；non-local resonance 则在 metasurface 平面内形成较高 Q 和大模式体积/场约束的折中，提高泵浦场与二次谐波辐射耦合。
- Mechanism: 根据官方 Nature 页面摘要，作者 pattern subwavelength 3R-MoS2 flakes 形成 non-local optical resonances，利用 metasurface 设计的 field confinement 和 high quality factors，相比同厚度未图案化 3R-MoS2 flakes 得到 140x SHG enhancement，并在 relevant telecom wavelengths、160 nm thick metastructures 中实现 single-pass SH conversion efficiency about 1e-4。
- Boundary advanced: 这是强 metasurface/非线性光子学证据，但不是可重构结构，也不是 OMIEC/OECT。由于本地 fulltext 为空，本分析只使用 packet 的官方 DOI/PDF/图路径和 Nature 页面摘要/图目级证据，不能扩展到器件寿命、调谐速度或神经形态计算。
- Old problem: 旧问题是 2D semiconductor nonlinear optics 在材料 χ(2) 很高和器件效率很低之间存在断裂：单层太薄，厚层相位失配，片上集成又要求小 footprint。
- Why it works: 它有效是因为 3R 堆垛保留体材料尺度的非中心对称二阶响应，而 non-local metasurface resonance 把光场和辐射通道重新工程化，使薄结构也有足够的光-物质相互作用。
- True novelty: 真正新意在于把 3R TMD 的堆垛非线性优势与 non-local metasurface 模式设计合并，不靠微米级厚度或常规相位匹配来获得高 SHG。对本方向的可迁移价值是：层状/软材料若能被图案化为 resonant metastructure，材料本征响应可被几何放大。
- Evidence: 本地 packet 有 DOI、PDF URL 和官方 publisher Fig. 1 路径 output/figures/crossref_10_1038_s41566-025-01781-3_publisher_fig1.png，但 fulltext 与 abstract 字段为空。补充核对官方 Nature 页面：Published 27 Oct 2025，Nature Photonics 19, 1376-1384；摘要报告 140x SHG enhancement、约 1e-4 single-pass conversion efficiency、160 nm thick metastructures。

## 5. Revisiting THz absorption in GO and rGO liquid crystalline films
- Venue: arXiv
- Published: 2025-07-29
- Type: transferable
- Tags: terahertz_microwave
- Score: 0.3936
- Core insight: 这篇 arXiv 预印本提出一种比传统 metasurface 更简单的 THz 吸收材料路线：通过真空过滤制备 GO/rGO liquid crystalline films，利用片层有序堆积与厚度控制，在 0.4-1.6 THz 获得较强吸收。它和 OECT/OMIEC 没有直接关系，但对“软/可加工材料替代复杂 THz metasurface”有参考价值。
- Problem frame: THz 通信、安全、传感和医学应用需要轻量、易制备、高吸收材料；传统 metasurface absorber 往往需要复杂微纳加工。文章的问题是：GO/rGO 液晶薄膜这种自组装软材料能否用简单工艺提供可调 THz 吸收。
- First principles: THz 吸收来自材料电导、介电损耗、层状片材取向和有效厚度的共同作用。GO/rGO 液晶相可让片层更均匀、更致密地排列，减少随机堆叠造成的散射和不均一，从而在远小于波长的厚度下形成有效吸收层。
- Mechanism: 作者通过电化学剥离获得 GO/rGO 分散液，真空过滤形成约 1.7-2.1 微米薄膜，并用 ellipsometry 确认液晶相，用 XRD/Raman/FTIR-ATR/SEM/AFM 表征结构，再用 THz-TDS 测量 0.4-1.6 THz 的反射/透射/吸收。摘要报告 GOLC 约 2.12 微米厚时平均吸收 37%，rGOLC 约 1.68 微米厚时平均吸收 50%。
- Boundary advanced: 先进性在于工艺简单、薄、材料自组装带来宽带 THz 吸收；边界是预印本、非图案化 metasurface、非主动可重构，也没有与传感读出或神经形态计算闭环耦合。把它纳入本周包，应定位为 THz 材料/吸收层候选，而非 metasurface computing 论文。
- Old problem: 旧问题是 THz absorber 常在性能和制造复杂度之间摇摆：微纳 metasurface 可设计性高但加工难，普通涂层易制备但吸收/厚度/均匀性不足。
- Why it works: 液晶相 GO/rGO 通过有序片层堆积提高有效相互作用和吸收均匀性；rGO 较高电导增强损耗，GO 的官能团和取向有助于调节介电响应。
- True novelty: 真正新意是把 GO/rGO liquid crystalline ordering 用作 THz absorber 的结构变量，而不是再设计金属/介质 meta-atom。对 OMIEC 项目只有间接价值：提示可用材料微结构有序性替代部分 lithographic complexity。
- Evidence: 本地有摘要和约 6.1 万字符 arXiv 全文。文本报告 0.4-1.6 THz、GOLC 37% average absorption at 2.12 um、rGOLC 50% absorption at 1.68 um，并说明厚度远小于中心波长。关键图为 output/figures/arxiv_2507_21535v1_caption_p3.png。

## 6. Metasurface-empowered freely-arrangeable multi-task diffractive neural networks with weighted training
- Venue: arXiv
- Published: 2025-06-23
- Type: direct
- Tags: metasurface_computing, terahertz_microwave
- Score: 0.4039
- Core insight: 这篇 arXiv 预印本提出 freely-arrangeable multi-task diffractive neural network：把多层 phase-only metasurfaces 当作可重新排序的物理网络层，通过改变级联顺序在手写数字与服饰分类之间切换，并用 weighted multi-task loss 调节任务性能。它是本期最接近 neuromorphic/physical computing 的 metasurface 论文。
- Problem frame: 传统 D2NN 硬件通常为单任务固定结构；要换任务往往需要重新训练、重新制造或引入复杂可编程/复用硬件。本文的问题是如何在低硬件成本下提高 diffractive optical/THz neural network 的任务可重构性。
- First principles: D2NN 依赖光/THz 波在层间自由传播和相位板调制完成矩阵-like 变换；若每一层是可预训练的 diffractive operator，那么改变层序会改变整体算子。weighted loss 则把不同任务的分类误差以可调权重耦合到同一个物理层集合中，使硬件在不同排列下保留任务特异性能。
- Mechanism: 作者设计两层级联 phase-only metasurface A-DNN，在 0.291 THz、2 x 80 x 80 neurons、15 mm 层间距下用于 MNIST 子集和 FashionMNIST 子集。通过改变两层顺序切换任务，通过 beta 权重调节 FashionMNIST 与 MNIST 的相对性能，并用仿真与 THz 实验验证分类能量分布。
- Boundary advanced: 先进性在于把“重排物理层”作为低成本可重构机制，而不是假设每个 meta-atom 都实时可编程。边界是任务非常简化、只有两层和小数据子集，实验精度低于仿真；没有 OMIEC/OECT，也没有在线学习或材料态记忆，因此是 physical computing architecture 参考，不是完整 neuromorphic material system。
- Old problem: 旧问题是 diffractive neural networks 一旦制造后功能冻结；可编程方案又引入复杂调制器、额外能耗和系统体积，削弱被动光计算的优势。
- Why it works: 它能工作是因为级联衍射层的传输矩阵不满足交换律，层序改变会产生不同的输入-输出映射；在训练时显式约束多个层序对应多个任务，使同一组 metasurface 具备多任务复用能力。
- True novelty: 真正新意是用机械/装配层面的 layer rearrangement 实现任务重构，并用 weighted training 给不同任务分配性能预算。对本项目而言，这比单纯固定 D2NN 更接近可重构 metasurface physical computing。
- Evidence: 本地有摘要和约 3.65 万字符全文。全文说明 A-DNN 可通过改变 cascaded diffractive layers 的顺序处理不同视觉任务，采用 weighted training；实验在 THz 频段验证 handwritten digit 与 fashion recognition。关键图已保存为 output/figures/arxiv_2506_18242v1_caption_p2.png。

## 7. A low-voltage-driven MEMS ultrasonic phased-array transducer for fast 3D volumetric imaging
- Venue: Microsystems & Nanoengineering
- Published: 2024-09-11
- Type: direct
- Tags: flexible_ultrasound
- Score: 0.7216
- Core insight: 这篇 Microsystems & Nanoengineering 论文展示低电压 pMUT 2D phased-array，用 MEMS cell-element-array 设计在 5 V 驱动下实现快速 3D volumetric ultrasound imaging。它不是 metasurface/OECT，但对本方向的“柔性/可穿戴深组织传感前端 + 后端计算”有系统意义。
- Problem frame: 可穿戴超声若要长期监测深组织，需要低电压、小型化、快速 3D 体成像；传统 1D 阵列只能给 2D 切面，高压驱动又不利于 wearable electronics。文章把瓶颈定义为电压、阵列维度、时间分辨率和体覆盖之间的工程折中。
- First principles: pMUT 通过压电薄膜/微机械膜片把电信号转成超声振动。二维相控阵通过通道相位/延迟控制声束方向；把多个 pMUT cells 分组成一个驱动 element 可以提高有效声压并降低通道复杂度，但必须处理 cell-cell 与 element-element 的耦合。
- Mechanism: 作者提出多层级 cell-element-array 设计，对 pMUT cell 的耦合效应进行定量表征，并构建 8 x 8 phased-array transducer。全文摘要和结论报告 5 V actuation、40 mm x 40 mm x 70 mm vascular phantom 体成像范围，以及 11 kHz temporal frame rate。
- Boundary advanced: 先进性在于低电压 3D 体成像和 CMOS/MEMS 兼容潜力。边界是目前仍是超声换能器/成像系统论文，不是可拉伸贴片完整产品，也不是神经形态计算；与 OECT/OMIEC 的交集主要在多模态生理传感系统层，而非材料层。
- Old problem: 旧问题是 wearable ultrasound 要么牺牲体覆盖和速度，要么依赖较高驱动电压/刚性探头，难以进入连续监测。
- Why it works: 分组 pMUT cell 提高单通道发射/接收能力，2D phased array 给出体扫描自由度，低电压 MEMS 工艺降低可穿戴系统的电源和集成压力。
- True novelty: 真正新意是把低电压 pMUT 阵列从单点/2D 演示推进到 fast 3D volumetric imaging，并用结构分层设计处理阵列耦合。对本项目可借鉴的是传感阵列前端如何与后端算法/计算闭环共同定义性能。
- Evidence: 本地有摘要和约 6.9 万字符全文。文中报告 wearable ultrasound、low-voltage pMUT、5-V actuated 8 x 8 phased-array、40 x 40 x 70 mm vascular phantom、11 kHz temporal resolution。关键图为 output/figures/openalex_W4402498997_caption_p3.png。

## 8. Flexible large-area ultrasound arrays for medical applications made using embossed polymer structures
- Venue: Nature Communications
- Published: 2024-03-30
- Type: direct
- Tags: flexible_ultrasound
- Score: 0.5274
- Core insight: 这篇 Nature Communications 论文提出 thermal embossing piezoelectric polymer 的 ultrasound transducer-on-foil 技术，展示柔性、大面积、可集成的超声阵列。核心价值是把传统刚性、含铅、小孔径超声探头推向可贴附/可弯曲的薄膜平台。
- Problem frame: 超声在临床外连续监测受探头限制：探头笨重、刚性、昂贵且常依赖含铅压电材料；现有柔性原型通常把刚性小片组装在软基底上，面积占比、带宽和可扩展性受限。本文的问题是如何用聚合物成型工艺做出可规模化柔性超声换能器。
- First principles: 压电聚合物 P(VDF-TrFE) 等材料在极化后可把电场转成机械声振动；通过热压 embossing 形成微结构阵列，可以提高有效面积和换能效率。柔性基底允许贴合曲面，但声学带宽、孔径、背衬和电极图案决定成像质量。
- Mechanism: 作者用热压微结构化压电聚合物薄膜并制作 transducer-on-foil；本地全文显示其讨论 active area、kerf、d33 等结构/材料指标，并展示 tissue-mimicking phantom 的二维超声图像、3 mm 半径 endoscope probe 集成，以及 91.2 x 14 mm2 大面积 non-invasive blood pressure sensor。
- Boundary advanced: 先进性在于柔性、大面积、无传统刚性探头的 manufacturing route。边界是它主要是超声换能器制造与成像演示，不是 OMIEC/OECT，也不是 metasurface physical computing；AI 只在宏观背景中出现，并非本文核心算法贡献。
- Old problem: 旧问题是可穿戴超声的换能器制造难以同时满足柔性、面积、成像质量和低成本放大。微组装刚性元件会限制填充率和规模化。
- Why it works: 热压 embossing 能在聚合物压电薄膜中形成较均一的微结构阵列，提高有效换能面积并保留柔性；foil 平台则能被集成到 endoscope 或大面积血压传感贴片。
- True novelty: 真正新意是 transducer-on-foil 的柔性制造路线及其两个尺度演示：小半径内窥镜曲面和大面积血压传感。对本方向的启发在于软传感前端应从制造可扩展性开始设计。
- Evidence: 本地有摘要和约 5.2 万字符全文。摘要报告 tissue mimicking phantom 2D ultrasound images、3 mm radius endoscope probe、91.2 x 14 mm2 non-invasive blood pressure sensor。关键图为 output/figures/openalex_W4393337759_caption_p3.png。

## 9. Well-defined in-textile photolithography towards permeable textile electronics
- Venue: Nature Communications
- Published: 2024-01-30
- Type: transferable
- Tags: smart_fiber_textile
- Score: 0.5196
- Core insight: 这篇 Nature Communications 论文提出 in-textile photolithography，在多孔纺织结构内部实现高精度金属图案化，并展示多路汗液电化学传感系统。对本方向的价值是提供一种把复杂电极/互连直接做进透气织物的制造方法，可作为 OECT/OMIEC wearable array 的底层互连平台。
- Problem frame: 纺织电子天然柔软、透气、可穿戴，但高精度、鲁棒导电图案往往牺牲舒适性或只停留在表面涂层。文章的问题是：能否在保持纺织物三维孔隙和透气性的同时实现 sub-100 um 级金属图案与系统集成。
- First principles: 纺织物的 3D 孔隙提供透气和大面积表面，但也给光刻带来非平面、渗透和双面曝光难题。若先让金属均匀渗入纤维 scaffold，再通过双面 photolithography 定义图案，就能让导电路径不仅覆盖表面，也进入纺织结构内部。
- Mechanism: 作者先通过 PAMD 让 textile 金属化，再用双面光刻形成 well-defined metal patterns。摘要与全文显示图案精度达 sub-100 um，具备 mechanical stability、washability 和 permeability；作为 proof-of-concept，构建 multiplexed sweat sensing，包括 pH、Na+、K+ 和 glucose/lactate 等电化学传感模块。
- Boundary advanced: 先进性在于把微纳加工的图案控制移植到纺织物内部，解决 wearable electronics 的互连与舒适性矛盾。边界是传感机制以金属电极/电化学阵列为主，不是 OECT/OMIEC channel，也没有 metasurface 或 neuromorphic computing；但它可作为这些器件的柔性互连与封装层。
- Old problem: 旧问题是 textile electronics 常有导电但粗糙、舒适但性能不足、或者高精度但不透气的三难问题。
- Why it works: PAMD 提供连续均匀金属涂层，双面光刻让图案在 porous scaffold 内对齐定义；金属进入纤维网络提高有效表面积与双面集成能力，同时保留空气/湿气通道。
- True novelty: 真正新意是“in-textile”而不是“on-textile”图案化：把导体精确写入织物体积内。对 OMIEC/OECT 阵列而言，它可能成为高密度电极、互连和汗液/体表传感系统的制造底座。
- Evidence: 本地有摘要和约 7.0 万字符全文。摘要报告 sub-100 um precision、mechanical stability、washability、permeability，以及 fully integrated in-textiles multiplexed sweat sensing。关键图为 output/figures/openalex_W4391358424_caption_p2.png。

## 10. A dual-mode fiber-shaped flexible capacitive strain sensor fabricated by direct ink writing technology for wearable and implantable health monitoring applications
- Venue: Microsystems & Nanoengineering
- Published: 2023-12-21
- Type: direct
- Tags: smart_fiber_textile
- Score: 0.5743
- Core insight: 这篇 Microsystems & Nanoengineering 论文用 direct ink writing 在 TPU 纤维管表面打印螺旋 Ag 电极，并用 BTO@Ecoflex 高介电封装，形成 dual-mode fiber-shaped flexible capacitive strain sensor。它展示了纤维形态传感器同时测轴向拉伸和径向膨胀的能力，可服务 wearable/implantable health monitoring。
- Problem frame: 传统纤维应变传感器常通过涂覆或挤出制备，导电/敏感层拉伸范围有限且界面易脱层；同时，血压/心率等监测既需要轴向形变，也需要管状结构的径向膨胀响应。本文要解决的是纤维传感器的可拉伸性、双模式响应和无线集成。
- First principles: 电容式应变传感依赖电极几何、介电层厚度和介电常数变化。螺旋电极在拉伸时改变有效重叠/间距，管状结构在径向压力下改变电容；BTO@Ecoflex 提供高介电和软封装，Ag 螺旋电极提供可拉伸导体路径。
- Mechanism: 作者用高精度 DIW 在 TPU tube fibers 上打印 parallel helical Ag electrodes，再用 BTO@Ecoflex 封装。摘要报告轴向拉伸检测范围 178%、灵敏度 0.924、检测限 0.6%、滞后系数 1.44%；径向膨胀灵敏度 0.00086 mmHg^-1，并与便携采集板、RF coil 组合用于血压和心率无线监测。
- Boundary advanced: 先进性在于纤维形态、双模式传感和 direct ink writing 工艺；边界是 capacitive strain sensor，不是 OMIEC/OECT，也没有化学选择性或 metasurface 计算。植入应用仍有材料替换、长期生物相容和人工血管基底验证等待完成，全文结论也承认长期使用安全性需要进一步验证。
- Old problem: 旧问题是纤维传感器的多层涂覆结构在反复拉伸下容易界面脱落，且单一轴向应变读出难以覆盖实际可穿戴/植入场景。
- Why it works: DIW 允许把可拉伸螺旋电极直接写在三维纤维表面，减少层间失配；高介电软复合层放大电容变化，管状几何天然适合径向压力/膨胀测量。
- True novelty: 真正新意是同一纤维器件同时覆盖轴向 tensile strain 和径向 expansion strain，并把它推向无线血流动力学监测演示。对本方向可借鉴的是纤维/纺织形态的系统集成，而不是材料本身。
- Evidence: 本地有摘要和约 4.46 万字符全文。摘要报告 178% detection range、0.924 sensitivity、0.6% detection limit、1.44% hysteresis、0.00086 mmHg^-1 radial sensitivity、portable data acquisition 和 RF coil wireless sensor。关键图为 output/figures/openalex_W4390050791_caption_p2.png。
