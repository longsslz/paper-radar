# Paper Radar Digest

## 1. Polymer-based metasurfaces for scalable, reconfigurable and multifunctional nanophotonics
- Venue: npj Nanophotonics
- Published: 2026-10-13
- Type: transferable
- Tags: none
- Score: 0.6425
- Core insight: 这篇综述把聚合物超表面从“柔性基底替代物”提升为同时承载结构、加工与主动功能的材料平台：机械形变、分子/纳米颗粒掺入、三维打印及电化学调制可以在同一体系内实现规模制造、可重构与多功能光场控制。
- Problem frame: 传统金属或高折射率介质超表面擅长精确调控光，但通常刚性、纳米加工昂贵，并且主动调谐需要额外异质集成；聚合物路线需要回答的不只是能否做出纳米结构，而是能否同时满足分辨率、面积、光学损耗、耐久性和快速可逆调谐。
- First principles: 超表面的相位、幅度和偏振响应来自亚波长单元的几何与材料色散。聚合物把折射率、体积、形状、分子氧化态和颗粒组分都变成可控状态变量；拉伸改变单元间距与耦合，电化学掺杂改变复折射率，二维/双光子聚合则把设计自由度扩展到三维。
- Mechanism: 论文按材料与加工链梳理 PMMA、PDMS、PEDOT:PSS、光刻胶与双光子树脂等平台，比较 EBL、光刻、纳米压印、双光子聚合和增材制造，并把这些路线映射到金属透镜、全息、传感、发光和动态光学；其中 PEDOT:PSS 等导电聚合物允许用约伏量级电化学势改变吸收与色散。
- Boundary advanced: 它给出了从约 5–10 nm 级 EBL/NIL 到约 100 nm 级双光子加工的能力版图，并系统连接机械、电学和化学调谐。但这是一篇 2026 年综述，不是单一器件的速度、循环寿命或系统能耗实测；不同文献中的性能不能直接拼接成一个同时满足所有指标的平台。
- Old problem: 以往讨论常把可扩展加工、柔性、主动调谐和功能分子集成分散在不同材料社区，导致设计者很难判断某种聚合物究竟是牺牲光学性能的基底，还是可进入信息处理闭环的主动介质。
- Why it works: 聚合物的关键优势不是单一高折射率，而是材料化学与制造方式可共同编程：柔顺性允许几何重构，官能化允许吸收/发光/氧化还原响应，复制与打印降低面积扩展成本，因此同一光学单元的状态可由外部刺激连续改变。
- True novelty: 真正价值是建立“材料—制造—重构—应用”的统一选择框架，并明确把 PEDOT:PSS、电化学调制和逆向设计纳入聚合物超表面版图；它为 OMIEC 与主动超表面的材料接口提供路线图，而不是宣称已完成 OECT 驱动的神经形态超表面。
- Evidence: 本地已解析 npj Nanophotonics 正式综述 PDF（约 12 万字符）及 Fig.1。文中给出材料/工艺表、动态超表面章节和多类器件实例；证据等级为正式综述全文，适合支持设计空间和机制归纳，不适合当作某一集成系统的原始性能证据。

## 2. Ad hoc manufactured OECT glucose sensor in capillary-driven microfluidic
- Venue: npj Biosensing
- Published: 2025-12-04
- Type: transferable
- Tags: oect_omiec
- Score: 0.7918
- Core insight: 作者没有把低稳定性的 AoGDH 强行做成长寿命植入传感器，而是反向设计“按需制造”：在 OECT 栅极上原位电聚合 ETE-COONa/AoGDH，并让毛细驱动微流控承担无泵采样与现场功能化，从而以即时制备换取无氧敏、无介体的葡萄糖检测。
- Problem frame: 第三代酶传感希望直接电子转移以免依赖氧或介体，但 GOx 的 FAD 位点深埋，AoGDH 虽更利于电子耦合却稳定性较差；同时，便携 OECT 传感还需要低体积、无外泵的样品引入和可重复制造。
- First principles: 当酶的 FAD 辅因子距导电聚合物约纳米尺度时，电子隧穿可把葡萄糖氧化反应直接耦合到栅极电位；OECT 的体相离子调制再把小的界面电荷变化放大为漏极电流。毛细压力提供无需外部能量的流体驱动。
- Mechanism: 研究把 AoGDH 与 ETE-COONa 或 ETE-S 单体混合，在 PEDOT:PSS/Au 栅极上低电位电聚合，形成酶—导电聚合物矩阵；随后将 OECT 嵌入 3D 打印毛细微流控，在器件内完成聚合、冲洗和 0.5–100 mM 葡萄糖检测。
- Boundary advanced: 开放器件可覆盖生理相关浓度，并在 0–0.5 V 多个栅压下响应；微流控中仍可分辨 5 mM，但响应低于开放体系。4 个器件的剂量曲线与 7 天储存测试显示灵敏度下降，且验证仅在缓冲液中，没有全血/间质液干扰、临床样本或长期连续监测。
- Old problem: 常见滴涂酶层取向随机、易脱落；传统微流控依赖泵阀；为了延长寿命而进行复杂固定化又会增加制造与电子转移距离。
- Why it works: ETE 单体能在温和电位下把酶包埋进导电网络，AoGDH 避开 GOx 的氧竞争，OECT 的跨导提供电流放大；把不稳定功能层延后到使用前生成，降低了长期货架稳定性对系统的约束。
- True novelty: 创新点是“可现场聚合的 OECT 栅极 + 被动毛细微流控”的系统组合，而不是单独发明葡萄糖酶或 OECT。它把材料稳定性缺点转化为制造时序设计问题。
- Evidence: 本地已解析 npj Biosensing 正式 Article PDF（约 3.9 万字符）和关键图。正文给出 100 μM–40 mM 开放器件响应、0.5–100 mM 微流控测试、4 器件曲线、0/5/7 天稳定性及生理范围标记。证据仍停留在缓冲液台架实验。

## 3. Electrically tunable physical reservoir computing on two-terminal devices
- Venue: npj Unconventional Computing
- Published: 2025-11-27
- Type: direct
- Tags: neuromorphic_oect
- Score: 0.6333
- Core insight: 该工作用脉冲间基底电压调节 Pt/HfO2/TiN 两端忆阻器的弛豫，而不是增加器件端口或外围反馈，把固定材料时间常数变成可编程时间尺度；同一器件因而能覆盖 0.14–100 ms 的事件流。
- Problem frame: 物理储备池依赖衰减记忆，但器件固有时间常数通常固定：输入过慢时状态已遗忘，输入过快时状态未分离。为不同任务换器件或做外部时间缩放会增加复杂度，并削弱物理计算的硬件优势。
- First principles: 忆阻器脉冲后的导电态由缺陷/离子弛豫回落。脉冲间施加基底电压会改变势垒与回落速率，从而改变有效记忆核；多个基底电压等价于并行采样不同时间常数，增加状态矩阵秩与可分性。
- Mechanism: 作者在 Pt/HfO2/TiN 器件上交替施加数据脉冲和 0–1.6 V 基底电压，以单个或多个 Vb 生成储备池状态；用 N-MNIST 事件帧、叠加振荡器低通响应和 Mackey–Glass 混沌预测验证分类、频域和时间序列任务。
- Boundary advanced: 基底电压把有效弛豫从约 1.2 ms 拉长到最高约 123 ms，使 N-MNIST 在 0.14–100 ms 三个数量级间隔上保持稳定，多个 Vb 接近软件基线；Mackey–Glass 200 步预测 NRMSE 为 0.27。测量系统限制了最短尺度，论文也未给出完整阵列、ADC/读出和训练开销的端到端能耗。
- Old problem: 传统两端物理储备池结构简单，却被单一固有时间常数锁死；提高任务适应性常依赖多器件、多端口、光刺激或额外调制。
- Why it works: Vb 在不改变输入脉冲编码的情况下改变弛豫动力学；不同 Vb 对相同历史产生不同衰减轨迹，线性读出便能从更丰富、互补的状态中分离时序模式。
- True novelty: 新意不是再次用忆阻器做 RC，而是把“脉冲间电位”定义为可编程时间常数旋钮，在保持两端结构的同时扩展多时间尺度处理。
- Evidence: 本地已解析 npj Unconventional Computing 正式 Article PDF（约 6.1 万字符）和关键图。器件循环、36 器件变异、弛豫曲线、N-MNIST、频率响应和 Mackey–Glass 均有实验/计算证据；系统级能效与大阵列可扩展性仍未闭环。

## 4. Multilayer nonlinear diffraction neural networks with programmable and fast ReLU activation function
- Venue: Nature Communications
- Published: 2025-11-24
- Type: direct
- Tags: tunable_metasurface, metasurface_computing, terahertz_microwave
- Score: 0.9605
- Core insight: 论文把可编程超表面单元、RF 检波器、放大器和加法器合成非线性层，在微波传播过程中直接实现类似 ReLU 的激活，使衍射网络从被动线性映射升级为可级联、可调阈值的多层物理网络。
- Problem frame: 衍射神经网络的传播快且并行，但线性层叠不能获得深网络的表达力；既有光电转换或材料非线性往往需要高光强、延迟大、功耗与级联复杂度高。
- First principles: 自由空间传播完成线性复数矩阵映射，检波把场强变为电信号，带偏置的 RF 放大/求和电路形成阈值增益，再由可编程辐射单元重发。只要局部输入—输出曲线具有分段线性增益，多层传播就获得非线性可分性。
- Mechanism: 作者在 5.8 GHz 构建线性衍射层和集成 RF 有源器件的非线性超表面层，通过偏置电压调节阈值与增益；系统既处理编码图像，也直接接收人体姿态散射场，并比较线性与非线性网络。
- Boundary advanced: 实测激活延迟 17.7 ns；MNIST、Fashion-MNIST 准确率分别 92.81% 和 78.8%，较线性网络高 4 个百分点以上；8 类实时姿态为 93.06%，线性基线 81.85%。论文给出器件级低功耗与进一步降至亚纳秒的理论路径，但没有与数字端到端系统同口径的总功耗、训练能耗和复杂场景泛化。
- Old problem: 可编程超表面可以重写线性权重，却常停在单层线性分类或编码；外接数字非线性会重新引入采样、转换和数据搬运瓶颈。
- Why it works: 空间传播天然并行，局部有源单元只需实现低维非线性而不承担全局矩阵乘；偏置控制将阈值从入射强度中解耦，使低强度信号也能跨层传播并形成更高阶决策边界。
- True novelty: 真正新意是可编程微波超表面内部的快速 ReLU-like 层及其多层级联，并用直接人体散射场验证“感知即计算”，而非仅离线加载图像。
- Evidence: 本地已解析 Nature Communications 正式全文（约 6.2 万字符）和关键图。17.7 ns、三项分类准确率及硬件结构均来自论文实验；亚 426 ps/226 ps 属器件替换后的理论估算，不能当作当前原型实测。

## 5. Review for optical metalens based on metasurfaces: fabrication and applications
- Venue: Microsystems & Nanoengineering
- Published: 2025-10-21
- Type: transferable
- Tags: none
- Score: 0.6185
- Core insight: 这篇 66 页综述把金属透镜商业化的核心矛盾定位为“纳米单元精度 × 大面积吞吐 × 光学效率 × 复杂曲面集成”，并用掩模光刻、无掩模写入和增材制造三条工艺路线映射不同应用。
- Problem frame: 金属透镜拥有比传统光学更高的相位/偏振自由度，但实验室 EBL 样品难直接扩展到厘米尺度、晶圆级一致性和可接受成本；单纯提高数值孔径并不能解决制造误差、封装与系统光效。
- First principles: 相位误差由单元尺寸、形貌与材料折射率偏差共同决定；口径增大时单元数量和累计缺陷迅速上升。并行光刻/压印提高吞吐，直写与双光子打印提高三维自由度，两者需要在分辨率和面积之间权衡。
- Mechanism: 综述比较光刻、EBL、纳米压印、激光直写、双光子聚合等制造技术，再按照明、波束整形、能量转换、显微、内窥与天文成像梳理金属透镜的系统角色，并讨论算法共设计和 CMOS 兼容。
- Boundary advanced: 文中汇集 2 cm 级金属透镜、4 英寸晶圆加工、5000 个晶圆级器件以及多类亚 100 nm 结构实例，但这些指标来自不同工作；它是开放获取综述，不是可重构金属透镜或神经网络的统一实验。
- Old problem: 很多金属透镜论文在小面积、单波长条件下展示高质量焦斑，却回避大口径的缺陷率、制造节拍、封装和与传感器耦合。
- Why it works: 把器件设计转译为制造容差问题后，工艺选择可由所需口径、最小线宽、纵横比、材料和曲面决定；算法设计还能在结构自由度与可制造性之间做联合优化。
- True novelty: 价值在于完整制造—应用对照表和商业化约束总结，而不是提出新的金属透镜结构。对本雷达方向，它提供超表面从论文图案走向规模阵列的制造基线。
- Evidence: 本地已解析 Microsystems & Nanoengineering 开放获取 Review PDF（约 9.9 万字符、66 页）和关键图。证据适合支持工艺范围和系统约束；跨文献数字不可视为单器件综合性能。

## 6. Maestro: A 302 GFLOPS/W and 19.8GFLOPS RISC-V Vector-Tensor Architecture for Wearable Ultrasound Edge Computing
- Venue: arXiv
- Published: 2025-03-06
- Type: direct
- Tags: flexible_ultrasound
- Score: 0.4685
- Core insight: Maestro 把可穿戴超声所需的 FFT 预处理、向量运算和 CNN 张量计算放进同一 65 nm RISC-V SoC，以存储耦合 FFT 与统一 Vector-Tensor Unit 减少数据搬运，使超声手势管线可以从远端 PC 回到本地。
- Problem frame: 可穿戴超声前端产生高带宽数据，而通用 MCU 难以同时承担频域预处理和神经网络；远端卸载增加延迟、无线功耗与隐私风险。单独堆一个 CNN 加速器又不能覆盖 FFT 和控制流。
- First principles: 系统能耗常由存储层级与数据移动主导。让 FFT 引擎靠近存储、让同一向量寄存器/执行单元支持标量、SIMD 与张量算子，可复用数据路径并提高不同阶段的有效利用率。
- Mechanism: 芯片包含 RV32 集群、可配置 VTU 和 16/32 位浮点 FFT 加速器；作者在超声通道预处理与 CNN 后处理管线上测量吞吐、功耗和能效，并与相近任务 SoC 比较。
- Boundary advanced: VTU 峰值为 19.8 GFLOPS、301.7–302 GFLOPS/W（FP16），FFT 为 3.6 GFLOPS、60.6 GFLOPS/W；特定可穿戴超声管线报告 12 mW、2.5 mJ 和约 5 倍加速。芯片总体工作包络可到约 212 mW，12 mW 不能外推为所有任务功耗；当前是 arXiv v1，未证明完整贴肤探头长期运行。
- Old problem: 既有边缘 SoC 常分别优化 DSP、FFT 或 DNN，导致超声端到端管线跨单元搬运并依赖主机；可穿戴场景又无法接受桌面 GPU 的功耗。
- Why it works: 超声管线天然包含规则 FFT 与高算术密度卷积，专用但可编程的数据通路能让两类算子各用合适精度和并行度，同时保留 RISC-V 控制。
- True novelty: 新意是面向可穿戴超声任务的异构算子组合与实测芯片，而非新的超声成像或手势算法；其贡献位于传感器后端的系统边界。
- Evidence: 已从 arXiv 官方地址获取并核验 16 页 v1 PDF，题名与编号匹配，全文约 8.4 万字符，关键图存在。峰值与应用管线数据来自硅后测量/论文表格，但论文仍是预印本，且未给出多受试者贴肤系统验证。

## 7. Forearm Ultrasound based Gesture Recognition on Edge
- Venue: arXiv
- Published: 2024-09-16
- Type: direct
- Tags: flexible_ultrasound
- Score: 0.446
- Core insight: 这项工作证明了一个很窄但实用的结论：把前臂超声 CNN 做 Float16 量化后，Raspberry Pi 4 可以在模型大小约 0.24 MB、单帧推理约 0.31 s 的条件下维持约 92% 帧级测试准确率。
- Problem frame: 前臂超声手势识别多在桌面 GPU 上完成，缺少移动端闭环；但边缘部署不仅受模型大小限制，还受探头数据采集、传输、实时性和跨人泛化制约。
- First principles: 卷积模型的权重与激活精度降低可减少存储和带宽，而超声纹理的类别间差异在适度量化下仍可保留；真正端到端延迟还包括采集、UDP 传输、缩放和显示。
- Mechanism: 作者用单名受试者、4 类手势、2400 帧数据训练五层 CNN，将 TensorFlow 模型转换为多种 TFLite 量化版本，在 Raspberry Pi 4 上比较大小、精度与推理时间，并通过 Windows 采集后 UDP 发送到 Pi 做演示。
- Boundary advanced: Float16 模型从约 1.5 MB 降到约 0.24 MB，帧级测试为 92%、0.31 s；不显示图像的演示为 85.3%、172 ms，10 帧可视化演示仅 80% 且约 2 s/帧。数据只来自 1 人，随机帧划分可能高估泛化，采集仍依赖 Windows，因此尚不是独立可穿戴系统。
- Old problem: 既有研究容易把离线 GPU 分类准确率当作可穿戴可用性，却没有把模型压缩和目标边缘硬件延迟放进同一实验。
- Why it works: Float16 量化减少模型存储与内存访问，且这组四手势在同一受试者、同一探头位置下可分性较高；Pi 的 TFLite 运行时能直接利用压缩模型。
- True novelty: 真正贡献是早期部署可行性与多种量化对照，不是新算法。它同样暴露了单人、帧泄漏和非独立采集链等关键缺口。
- Evidence: 本地已有 arXiv v1 全文与关键图。正文明确报告 1 名受试者、2400 帧、1800/600 划分、92%/0.31 s，以及两种演示的 85.3%/172 ms 和 80%/约 2 s。证据等级为预印本单人受控演示。

## 8. Designing organic mixed conductors for electrochemical transistor applications
- Venue: Nature Reviews Materials
- Published: 2024-02-29
- Type: transferable
- Tags: oect_omiec
- Score: 0.5648
- Core insight: 这篇 Nature Reviews Materials 综述把 OECT 性能从单一迁移率或跨导指标还原为 OMIEC 分子结构同时决定电子传输、离子进入、体积膨胀、力学顺应、生物相容和记忆效应的多目标设计问题。
- Problem frame: OECT 应用从神经界面、代谢物传感扩展到柔性、刺激响应和存储，但同一种侧链或骨架修改往往同时改变结晶、离子溶剂化、电子态和机械稳定性；只按稳态跨导筛材料难以预测真实器件。
- First principles: OECT 通道是体相离子—电子耦合体系：离子注入改变聚合物氧化态与载流子密度，同时引发溶胀和微结构重排。化学骨架、亲水侧链、交联和共混控制电子耦合、离子化学势与力学耗散之间的权衡。
- Mechanism: 官方页面与图组按 OECT 工作原理和历史、代表性 OMIEC 化学结构、材料时间线、电学/力学调控策略，以及多功能 OMIEC 与刺激响应应用组织证据，并把生物相容、拉伸、刺激响应和记忆保持视为材料设计输出。
- Boundary advanced: 该综述给出材料—器件—应用的系统框架，但不是新的 OMIEC 或器件实验；当前本地未取得出版社 PDF。可用证据为 Nature 正式摘要、Fig.1–5 结构和正式元数据，KAUST 只提供明确标注的 post-print 入口，下载直链本次返回 HTML 壳，不能计为已验证全文。
- Old problem: 领域常把 p 型高跨导材料、n 型稳定材料、可拉伸器件和神经形态记忆分开优化，缺少能解释“为什么一种化学修改在某任务获益、在另一任务失效”的统一材料逻辑。
- Why it works: 把 OMIEC 看成开放的离子—电子热力学与动力学系统，可同时解释跨导、速度、滞后、溶胀和记忆；分子设计必须匹配目标任务所需的时间尺度、环境与机械边界。
- True novelty: 真正价值是把 OMIEC 化学设计与 OECT 功能边界系统对齐，并强调多功能来自耦合而非附加模块；它为本方向选择可调超表面材料或物理神经元状态变量提供材料学坐标系。
- Evidence: 证据等级为出版社正式摘要/图级综述页面，非本地全文。Nature 页面确认 2024 年 Version of Record、卷页 9:249–265、Fig.1–5 主题与摘要中的材料设计主张；分析只保留正式页面实际支持的机制与边界。

## 9. Photonic neuromorphic architecture for tens-of-task lifelong learning
- Venue: Light Science & Applications
- Published: 2024-02-26
- Type: direct
- Tags: metasurface_computing
- Score: 0.5994
- Core insight: L2ONN 用稀疏光子连接保护旧任务、逐任务扩大激活区域，并以不同波长并行承载任务表示，使同一光学网络获得持续学习能力，而不是每来一个任务就重训并覆盖原有权重。
- Problem frame: 光学神经网络擅长并行矩阵运算，却与电子网络一样会灾难性遗忘；为每个任务复制独立光路又会迅速耗尽面积、端口和波长资源。
- First principles: 衍射传播提供大规模线性连接，稀疏激活降低新任务与旧权重的重叠，多波长提供近似正交的并行通道。若新增任务只占用未激活或低冲突的光子连接，旧任务映射就能被保留。
- Mechanism: 自由空间方案用多光谱输入、稀疏衍射层和 PCM 光学滤波器逐任务激活连接；片上方案用硅光波导、槽结构和输出探测器实现代表性任务增量学习，并以电子全连接读出/训练配合光学前端。
- Boundary advanced: 数值/自由空间评估最多连续学习 14 个任务、占用约 96.3% 光子连接，容量相对既有 ONN 报告 14 倍且效率高一个数量级；片上实验验证了较小规模的代表性任务，并不等于 14 个任务全部在芯片上实测。训练、探测和读出仍含电子环节，端到端能耗口径需谨慎。
- Old problem: 传统 ONN 在新任务训练后旧任务准确率可快速跌入遗忘区，静态光学权重也难在有限硬件上同时容纳多域任务。
- Why it works: 稀疏掩码把参数冲突从全局重写变成局部增量占用，多波长把不同任务的光场表示并行复用同一传播结构；因此网络容量主要受未占用光子连接和串扰约束。
- True novelty: 创新点是面向持续学习的光子资源分配机制及自由空间—片上双重验证，而不是单次静态分类。
- Evidence: 本地已解析 Light: Science & Applications 开放获取正式全文（约 5.3 万字符）和关键图。14 任务、96.3% 激活、14 倍容量来自大规模评估；片上 Fig.5 是代表性少任务实验，二者已在分析中分开。

## 10. Monolithically integrated high-density vertical organic electrochemical transistor arrays and complementary circuits
- Venue: Nature Electronics
- Published: 2024-02-21
- Type: transferable
- Tags: oect_omiec
- Score: 0.6413
- Core insight: 作者用电子束把连续 OMIEC 薄膜的局部区域转成电子绝缘、仍保持离子可通的区域，从而避免刻蚀造成的地形断裂和短路，在同一连续膜上实现高密度垂直 OECT 阵列与上下堆叠互补逻辑。
- Problem frame: OECT 的湿法/软材料难做高分辨微纳图案；传统刻蚀会切断离子通路、产生台阶并妨碍多层电极交叉，导致阵列密度和互补电路集成远落后于无机电子。
- First principles: 电子束交联或损伤可选择性压低有机半导体的电子输运，却不必完全移除材料；保留拓扑连续的离子渗透层，可把“电隔离”和“离子连通”分离。垂直沟道再把通道长度压到薄膜厚度尺度，提高跨导和速度。
- Mechanism: 研究对 p 型和 n 型 OMIEC 做空间选择电子束曝光，定义有效与失活区域，再上下布置源漏电极形成 vOECT；由此制作有源矩阵、10×10 垂直堆叠互补反相器阵列以及 NAND/NOR 固态离子凝胶逻辑。
- Boundary advanced: 正式摘要和 PMC 正文报告最高约 720 万 OECT/cm²、0.08–1.7 S 跨导、<100 μs 瞬态和 >100,000 次稳定开关；互补反相器平均增益约 135.68±30.72，NAND/NOR 电路面积约 300 μm²。验证仍是实验室微纳制造与受控电解质/离子凝胶，未覆盖长期生物环境、晶圆良率或与传感阵列的完整系统。
- Old problem: 已有垂直 OECT 能提高单位面积电流，却因有机层刻蚀、层间接触和 p/n 材料图案化困难，难以形成高密度、可寻址、互补逻辑阵列。
- Why it works: 选择性失活让一张连续膜同时承担离子网络和电子像素隔离，避免物理挖空造成的电极短接；垂直纳米沟道缩短载流路径，p/n 堆叠则在低电压下获得高增益逻辑。
- True novelty: 真正新意是“电子绝缘但离子连通”的非起伏图案化范式，以及它对 3D 互补 OECT 集成的直接解锁，而非单个高跨导器件。
- Evidence: Nature 官方页面确认 Version of Record、卷页 7:234–243 与关键图；PubMed/PMC 提供完整作者稿级正文和图表，支持密度、跨导、速度、循环及逻辑数据。本地研究包未取得出版社最终 PDF，因此证据标为“正式页面 + PMC 完整作者稿”，不计作出版社 PDF 全文。
