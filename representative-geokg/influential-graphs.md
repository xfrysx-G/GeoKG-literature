# 高影响力GeoKG补充案例

按你的要求，本页只收录知识图谱。引用量高、工程规模大或团队有代表性的证据会分别说明。引用计数来自各自标明的来源，数据库覆盖范围不同，不宜拿不同平台的数字直接排序。规模数字注明对应论文发表时点。

## 1. YAGO2｜时空增强型YAGO知识库

**图谱类型：** 直接地理／时空知识图谱

**团队：** Max Planck Institute for Informatics；Johannes Hoffart、Fabian M. Suchanek、Gerhard Weikum等。

**权威与影响依据：** AI Journal 2013论文获Artificial Intelligence Journal Prominent Paper Award。Max Planck Institute 2023双年报告记载该论文当时约1,500次引用；引用数随数据库和时间变化。

**工程规模：** YAGO2论文报告约4.47亿事实、980万实体，并将不少实体和事实锚定到时间与空间；这是论文发布时的数据规模。

**知识内容：** 从Wikipedia、GeoNames和WordNet构建实体知识，并对实体、事件及事实加入时空信息。

**用途：** 时空知识查询、实体消歧、语义搜索和关联事实发现。

**纳入GeoKG综述时的边界：** 这里的YAGO2是时空扩展图谱，区别于已有清单里的YAGO2geo：后者是在YAGO2基础上进一步增加精确几何与OSM地理要素。

**论文：** Hoffart et al. (2013). YAGO2: A Spatially and Temporally Enhanced Knowledge Base from Wikipedia. Artificial Intelligence, 194, 28–61. DOI: 10.1016/j.artint.2012.06.001.

[项目／图谱入口](https://yago-knowledge.org/downloads/yago-2) · [论文](https://doi.org/10.1016/j.artint.2012.06.001) · [影响或补充证据](https://pure.mpg.de/pubman/item/item_3527212_4/component/file_3527885/biennial-report-2023.pdf?mode=download)

## 2. LinkedGeoData｜关联地理数据知识图谱

**图谱类型：** 直接地理知识图谱与Linked Data工程

**团队：** University of Leipzig AKSW团队；Claus Stadler、Jens Lehmann、Konrad Höffner、Sören Auer。

**权威与影响依据：** Semantic Web期刊的经典GeoKG工程论文；Rankless（引用数据来自OpenAlex）检索时显示该论文有268次索引引用。引用计数依索引平台而异。

**工程规模：** 把协作式OpenStreetMap数据转换为RDF，建设地理词汇、实体链接、查询和浏览应用；工作不只是提出模型，也包括数据发布与互联。

**知识内容：** 道路、建筑、地貌等OSM对象的RDF表达、类型词汇及与GeoNames等外部地理数据的链接。

**用途：** 空间Linked Data整合、RDF语义查询、地理浏览与跨数据源关联。

**纳入GeoKG综述时的边界：** 项目论文发表于2012年，作为奠基工程引用；不据此声称当前SPARQL端点仍然正常运行。

**论文：** Stadler et al. (2012). LinkedGeoData: A Core for a Web of Spatial Open Data. Semantic Web, 3(4), 333–354. DOI: 10.3233/SW-2011-0052.

[项目／图谱入口](https://linkedgeodata.org/) · [论文](https://doi.org/10.3233/SW-2011-0052) · [影响或补充证据](https://www.rankless.org/authors/claus-stadler)

## 3. Wikidata｜维基数据协作知识图谱（含地理知识子图）

**图谱类型：** 大规模、多语言、协作式通用知识图谱

**团队：** Wikimedia社区与Wikimedia Foundation生态；奠基论文作者Denny Vrandečić、Markus Krötzsch。

**权威与影响依据：** ACM页面显示2014年CACM奠基论文截至本次检索约2,714次引用；Wikidata持续由全球编辑者与机器人协作维护，规模和学术影响均突出。

**工程规模：** 覆盖跨语言实体与属性关系，支持坐标等数据类型；可通过Wikidata Query Service以SPARQL检索地理实体和空间信息。

**知识内容：** 国家、城市、行政区、河流、山脉、建筑等实体及坐标、隶属、邻接等属性关系；其地理内容属于大型通用KG中的子图。

**用途：** 地名与实体关联、跨语言地理信息查询、外部地理数据链接，以及作为其他图谱的实体标识资源。

**纳入GeoKG综述时的边界：** Wikidata不是专门构建的GeoKG。若纳入GeoKG综述，应标注为“含丰富地理知识的通用KG”，讨论其地理子图和互联作用。

**论文：** Vrandečić & Krötzsch (2014). Wikidata: A Free Collaborative Knowledgebase. Communications of the ACM, 57(10), 78–85. DOI: 10.1145/2629489.

[项目／图谱入口](https://www.wikidata.org/) · [论文](https://doi.org/10.1145/2629489) · [影响或补充证据](https://www.wikidata.org/wiki/Wikidata:Wikidata_Query)

## 4. DBpedia｜DBpedia多语言知识图谱（含地理子图）

**图谱类型：** 大规模、多语言、跨领域知识图谱

**团队：** DBpedia社区；奠基工程与论文团队包括Jens Lehmann、Sören Auer、Christian Bizer等，关联Leipzig AKSW和Mannheim Data & Web Science团队。

**权威与影响依据：** Semantic Web 2015综述工程论文，Rankless基于OpenAlex的记录显示约2.2K索引引用。其团队和开放数据工程对Linked Data生态影响显著。

**工程规模：** 论文介绍从111种语言Wikipedia抽取结构化知识；当时英语版图谱包含超过4亿事实、描述约370万个实体，并提供下载和SPARQL服务。数字为论文发表时数据。

**知识内容：** 人物、地点、组织、事件等跨领域实体及多语言关系；其中地点、坐标、行政和地理类别构成可查询的地理子图。

**用途：** 跨语言实体检索与链接、地点背景查询、开放知识图谱互联和地理实体消歧。

**纳入GeoKG综述时的边界：** DBpedia是通用知识图谱而非专门GeoKG。引用影响来自整体知识图谱与工程论文；用于GeoKG综述时应聚焦其地理子图。

**论文：** Lehmann et al. (2015). DBpedia: A Large-Scale, Multilingual Knowledge Base Extracted from Wikipedia. Semantic Web, 6(2), 167–195. DOI: 10.3233/SW-140134.

[项目／图谱入口](https://www.dbpedia.org/) · [论文](https://doi.org/10.3233/SW-140134) · [影响或补充证据](https://www.rankless.org/hit-papers/10.3233/sw-140134)

## 给综述的取舍建议

YAGO2和LinkedGeoData可作为直接的时空／地理知识图谱代表；Wikidata和DBpedia体量及论文影响突出，但应作为含地理子图的通用KG，不能写成专门GeoKG。这样可同时呈现专门GeoKG与大型通用KG的两种路线。
