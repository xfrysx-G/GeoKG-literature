# Representative GeoKG Resources｜代表性GeoKG资源

本目录整理8项具有不同领域和技术路线代表性的GeoKG及相关语义地理信息基础设施。选择依据为可追溯的团队与机构背景、公开论文或技术材料，以及可说明的知识组织与应用方式；不作全球影响力排名，也不要求结合大语言模型。中文名称为便于理解的译名。

来源核查日期：2026-11-07。

| 名称 | 领域 | 形态 |
|---|---|---|
| [KnowWhereGraph](https://www.knowwheregraph.org/) | 跨领域环境与灾害 | 知识图谱、数据融合与地理增值服务 |
| [DDE Geoscience Knowledge Graph](https://www.unesco.org/en/open-science/inclusive-science/empowering-geoscientists-deep-time-digital-earth) | 深时地学与地质 | 国际科学计划中的知识体系、图谱与协同工具 |
| [The World Avatar](https://www.cares.cam.ac.uk/research/the-world-avatar/) | 城市、能源与工业数字孪生 | 动态知识图谱、计算代理与数字孪生框架 |
| [Geoconnex](https://internetofwater.org/geoconnex/) | 水文与水资源 | 水数据标识、链接与检索基础设施 |
| [Ocean Data Information System (ODIS)](https://odis.org/overview/) | 海洋信息 | 联邦式元数据知识图谱与互操作工程 |
| [Km4City / Snap4City](https://www.snap4city.org/drupal/node/19) | 智慧城市与交通 | 城市本体、实例知识库、API与运营平台 |
| [YAGO2geo](https://yago2geo.di.uoa.gr/) | 精确几何与空间问答 | 地理知识图谱与研究数据资源 |
| [WorldKG](https://www.dsis.uni-bonn.de/worldkg/de) | 全球地理实体与开放地图语义化 | 地理知识图谱与公开研究数据 |

## 1. KnowWhereGraph｜跨领域地理知识图谱

A cross-domain geo-knowledge graph that connects environmental and societal data through shared spatial references, supporting geo-enrichment and contextual discovery.

- **领域：** 跨领域环境与灾害
- **成果形态：** 知识图谱、数据融合与地理增值服务
- **团队与代表作者：** UCSB等多校合作；Krzysztof Janowicz、Pascal Hitzler、Mark Schildhauer等
- **代表性依据：** NSF Convergence Accelerator支持；合作涉及USGS、USDA及产业和公益机构
- **知识与空间表达：** 地理实体、区域、全球离散网格及主题数据；通过空间与时间关联不同来源。
- **典型用途：** 受灾地区背景信息整合、农业与食品供应链环境信息、跨来源区域比较。
- **整理价值：** 以空间位置组织跨领域证据，说明GeoKG如何承担GIS中的地理增值服务。
- **表述边界：** 适合说明异构数据的空间关联和地理增值；不能把空间共现直接解释为因果关系

**参考材料：** The KnowWhereGraph: A Large-Scale Geo-Knowledge Graph for Interdisciplinary Knowledge Discovery and Geo-Enrichment。2025 · arXiv预印本；此处链接版本不作为期刊出版信息。

[官方入口](https://www.knowwheregraph.org/) · [论文／技术文档](https://arxiv.org/abs/2502.13874) · [补充证据](https://knowwheregraph.org/about/)

## 2. DDE Geoscience Knowledge Graph｜深时数字地球地学知识图谱

The DDE programme develops geoscience knowledge systems, ontologies and graphs across disciplines, combining expert organisation with knowledge extraction.

- **领域：** 深时地学与地质
- **成果形态：** 国际科学计划中的知识体系、图谱与协同工具
- **团队与代表作者：** IUGS Deep-time Digital Earth计划；朱云强、周成虎、胡修棉、王新兵等多机构团队
- **代表性依据：** IUGS国际科学计划及UNESCO官方介绍；有系统性方法与建设进展论文
- **知识与空间表达：** 地学概念及学科关系；区分基础、学科和应用层。空间实例与专业概念层需分别说明。
- **典型用途：** 跨学科地学知识共享、专业语义整合、面向应用的地学知识组织。
- **整理价值：** 国际科学计划下的专业领域知识工程，适合体现专家知识、学科本体与图谱协作。
- **表述边界：** DDE是计划与生态体系，不能等同于一个已完全统一的全球实例图谱

**参考材料：** Methodology, progress and challenges of geoscience knowledge graph in International Big Science Program of Deep-Time Digital Earth。2025 · Journal of Geographical Sciences 35(5): 1132–1156 · DOI: 10.1007/s11442-025-2361-0。

[官方入口](https://www.unesco.org/en/open-science/inclusive-science/empowering-geoscientists-deep-time-digital-earth) · [论文／技术文档](https://www.geogsci.com/EN/abstract/article/1009-637X/73547) · [补充证据](https://www.geogsci.com/EN/abstract/article/1009-637X/73547)

## 3. The World Avatar｜世界化身／世界数字孪生知识图谱

A dynamic knowledge graph and agent framework connecting data and computational models for interoperable digital twins and scenario analysis.

- **领域：** 城市、能源与工业数字孪生
- **成果形态：** 动态知识图谱、计算代理与数字孪生框架
- **团队与代表作者：** University of Cambridge、Cambridge CARES及合作团队；Markus Kraft、Jethro Akroyd等
- **代表性依据：** 剑桥官方持续研究项目；具有通用框架论文及洪水风险等应用研究
- **知识与空间表达：** 建筑、基础设施、传感器、环境信息与计算模型；代理更新数据和派生信息，部分应用具有空间锚点。
- **典型用途：** 建筑与能源系统分析、城市韧性、洪水评估和情景模拟；具体能力取决于应用模块。
- **整理价值：** 从静态事实走向数据—模型—计算代理协同，适合讨论动态GeoKG与数字孪生。
- **表述边界：** 框架、本体与具体应用实例图谱应分开表述；并非所有模块都是地理数据

**参考材料：** Universal Digital Twin – A Dynamic Knowledge Graph。2021 · Data-Centric Engineering · DOI: 10.1017/dce.2021.10。

[官方入口](https://www.cares.cam.ac.uk/research/the-world-avatar/) · [论文／技术文档](https://doi.org/10.1017/dce.2021.10) · [补充证据](https://doi.org/10.1017/dce.2021.10)

## 4. Geoconnex｜水文地理数据互联知识图谱

A water-data linking infrastructure that uses persistent identifiers and a knowledge graph to connect hydrologic features with distributed data resources.

- **领域：** 水文与水资源
- **成果形态：** 水数据标识、链接与检索基础设施
- **团队与代表作者：** Lincoln Institute of Land Policy的Center for Geospatial Solutions／Internet of Water；与USGS合作
- **代表性依据：** USGS官方介绍其社区水数据知识图谱与检索索引；有公开访问文档
- **知识与空间表达：** 河流、流域、监测站及相关数据服务；利用持久URI连接水文参考对象与分散资源。
- **典型用途：** 跨机构发现某条河流、流域或站点关联的数据，减少不同水数据系统间的检索障碍。
- **整理价值：** 侧重标识、链接和资源发现，代表跨机构水文数据互操作。
- **表述边界：** 核心是水文对象与分散数据资源互联，不代表将全部原始观测集中存入图谱

**参考材料：** Geoconnex official knowledge graph access documentation。官方技术文档；此条不冒充期刊论文。

[官方入口](https://internetofwater.org/geoconnex/) · [论文／技术文档](https://docs.geoconnex.us/access/overview/) · [补充证据](https://www.usgs.gov/media/videos/towards-internet-water-creating-a-community-search-index-water-data)

## 5. Ocean Data Information System (ODIS)｜海洋数据信息系统

A federation of independent ocean information systems whose shared metadata conventions enable a collective knowledge graph for resource discovery.

- **领域：** 海洋信息
- **成果形态：** 联邦式元数据知识图谱与互操作工程
- **团队与代表作者：** UNESCO IOC／IODE；Pier Luigi Buttigieg、Douglas Fils等参与技术建设
- **代表性依据：** 联合国教科文组织政府间海洋学委员会体系；跨机构海洋资源互联
- **知识与空间表达：** 海洋数据集、服务与其他信息资源的结构化描述；采集分布式节点元数据并建立资源关联。
- **典型用途：** 跨海洋机构发现数据和服务，让独立系统的资源描述可互操作。
- **整理价值：** 以国际协作的联邦元数据图谱实现海洋信息发现，适合与集中式实例图谱比较。
- **表述边界：** 主要是资源描述与发现层的知识图谱，不能称为统一的原始海洋观测或海洋因果图谱

**参考材料：** ODIS architecture and implementation documentation。官方项目与架构文档；此条不冒充期刊论文。

[官方入口](https://odis.org/overview/) · [论文／技术文档](https://github.com/iodepo/odis-arch) · [补充证据](https://book.odis.org/)

## 6. Km4City / Snap4City｜城市知识模型与智慧城市平台

A city knowledge model and platform ecosystem integrating heterogeneous urban data into an RDF knowledge base for querying and city services.

- **领域：** 智慧城市与交通
- **成果形态：** 城市本体、实例知识库、API与运营平台
- **团队与代表作者：** University of Florence DISIT Lab；Paolo Nesi、Pierfrancesco Bellini等
- **代表性依据：** 佛罗伦萨大学研究团队；有城市知识库、服务接口与平台应用文档
- **知识与空间表达：** 道路、地址、城市服务、交通传感器等；用城市本体协调静态与动态数据，并提供SPARQL访问。
- **典型用途：** 城市数据整合、道路及服务查询、交通与传感器相关应用。
- **整理价值：** 展示城市本体如何落地为实例知识库、接口与应用，而非停留在概念模型。
- **表述边界：** Km4City本体与Snap4City平台不是同一对象；代表性在于本体与实例知识库及服务的结合

**参考材料：** Km4City Ontology Building vs Data Harvesting and Cleaning for Smart-city Services。作者公开稿 arXiv:1508.01086；关联出版DOI: 10.1016/j.jvlc.2014.10.023。

[官方入口](https://www.snap4city.org/drupal/node/19) · [论文／技术文档](https://arxiv.org/abs/1508.01086) · [补充证据](https://arxiv.org/abs/1508.01086)

## 7. YAGO2geo｜具有精确地理空间知识的YAGO扩展

An extension of YAGO2 with precise geospatial information and geometries, supporting spatial queries beyond simple entity coordinates.

- **领域：** 精确几何与空间问答
- **成果形态：** 地理知识图谱与研究数据资源
- **团队与代表作者：** National and Kapodistrian University of Athens；Manolis Koubarakis、Nikolaos Karalis、Georgios Mandilaras
- **代表性依据：** ISWC 2019成果；雅典大学公开论文与项目资源
- **知识与空间表达：** 地理实体与行政区划，以及点、线、面等精确几何；支持基于几何的空间查询。
- **典型用途：** 空间条件检索与地理问答，以及对地理实体几何和行政关系的联合利用。
- **整理价值：** 适合作为语义实体与精确几何结合的研究案例。
- **表述边界：** 属于经典研究资源；不能仅凭项目主页存在就判断其仍在持续更新

**参考材料：** Extending the YAGO2 Knowledge Graph with Precise Geospatial Knowledge。2019 · ISWC · 作者公开PDF。

[官方入口](https://yago2geo.di.uoa.gr/) · [论文／技术文档](https://cgi.di.uoa.gr/~koubarak/publications/2019/yago2geo_iswc2019.pdf) · [补充证据](https://cgi.di.uoa.gr/~koubarak/publications/2019/yago2geo_iswc2019.pdf)

## 8. WorldKG｜世界尺度地理知识图谱

A world-scale geographic knowledge graph that semantically organises OpenStreetMap entities and tags and connects them with external knowledge bases.

- **领域：** 全球地理实体与开放地图语义化
- **成果形态：** 地理知识图谱与公开研究数据
- **团队与代表作者：** University of Bonn、L3S；Elena Demidova、Alishiba Dsouza、Nicolas Tempelmeier、Ran Yu、Simon Gottschalk
- **代表性依据：** DFG研究项目；CIKM 2021论文及机构公开成果
- **知识与空间表达：** OSM地理实体、标签与语义类别层级；连接外部知识库，改善地理实体的语义表达。
- **典型用途：** 地理实体语义检索、地图数据与通用知识库对齐、地理知识增强研究。
- **整理价值：** 适合作为开放地图数据从标签系统走向语义图谱的代表案例。
- **表述边界：** WorldKG是基于OSM构建的语义资源，不等同于OSM本身；注意数据版本时间

**参考材料：** WorldKG: A World-Scale Geographic Knowledge Graph。2021 · CIKM: 4475–4484 · DOI: 10.1145/3459637.3482023。

[官方入口](https://www.dsis.uni-bonn.de/worldkg/de) · [论文／技术文档](https://arxiv.org/abs/2109.10036) · [补充证据](https://research.uni-hannover.de/en/publications/worldkg-a-world-scale-geographic-knowledge-graph/)

## 范围说明

成果形态包括实例图谱、科学计划、平台与联邦元数据工程，不能视为同类产品直接排名。官方入口和论文可用于进一步核查；本目录未逐一测试在线查询端点或下载全量数据。项目、作者与机构的列举不表示其为本目录背书。

可下载同目录的 `catalogue.csv` 与 `data.json`。本目录不再分发第三方论文PDF。
