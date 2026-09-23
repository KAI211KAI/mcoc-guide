/* ============================================================
   英雄科普数据（js/data.js）
   ------------------------------------------------------------
   字段说明：
   - key    ：英文名（用于图鉴头像标识）
   - name   ：中文名
   - en     ：英文全名
   - cls    ：职业分类（cosmic/tech/mutant/skill/science/mystic）
   - stars  ：参考星级（1-6，仅作科普示意，实际随版本变化）
   - desc   ：一句话科普 / 定位说明
   ============================================================ */

/* 职业中文名映射（供图鉴标签与筛选使用） */
const CLASS_NAMES = {
  cosmic: "宇宙",
  tech: "科技",
  mutant: "变异",
  skill: "格斗",
  science: "科学",
  mystic: "神秘"
};

/* 英雄数据集 */
const CHAMPIONS = [
  { key: "ironman", name: "钢铁侠", en: "Iron Man", cls: "tech", stars: 5,
    desc: "托尼·斯塔克。高爆发远程输出，装甲附带能量护盾，适合主攻与破防。" },
  { key: "captainamerica", name: "美国队长", en: "Captain America", cls: "science", stars: 5,
    desc: "盾牌格挡稳如堡垒，眩晕控制强，是新手可靠的坦克型前排。" },
  { key: "thor", name: "雷神托尔", en: "Thor", cls: "cosmic", stars: 5,
    desc: "阿斯加德雷神，雷霆连段爆发高，能造成多段真实伤害。" },
  { key: "hulk", name: "绿巨人浩克", en: "Hulk", cls: "science", stars: 5,
    desc: "怒气累积越战越勇，伤害随怒气飙升，越残血越恐怖的输出手。" },
  { key: "spiderman", name: "蜘蛛侠", en: "Spider-Man", cls: "science", stars: 4,
    desc: "高灵活度闪避与易伤施加，机动性强，适合快速拉扯战。" },
  { key: "wolverine", name: "金刚狼", en: "Wolverine", cls: "mutant", stars: 6,
    desc: "超强自愈能力，持续回血，狼爪撕裂附带流血，持久战之王。" },
  { key: "magneto", name: "万磁王", en: "Magneto", cls: "mutant", stars: 5,
    desc: "掌控磁场，对金属系英雄克制明显，控制与爆发兼备。" },
  { key: "storm", name: "暴风女", en: "Storm", cls: "mutant", stars: 5,
    desc: "操控雷电与风暴，范围伤害出色，是团队型能量输出核心。" },
  { key: "blackwidow", name: "黑寡妇", en: "Black Widow", cls: "skill", stars: 4,
    desc: "精准致残与闪避反击，削弱对手防御，走位灵活的刺客型。" },
  { key: "blackpanther", name: "黑豹", en: "Black Panther", cls: "skill", stars: 5,
    desc: "瓦坎达之王，快速多段连击叠加流血，越打越快的近战输出。" },
  { key: "hawkeye", name: "鹰眼", en: "Hawkeye", cls: "skill", stars: 4,
    desc: "远程弓箭手，精准命中造成持续流血，控制与消耗兼备。" },
  { key: "doctorstrange", name: "奇异博士", en: "Doctor Strange", cls: "mystic", stars: 6,
    desc: "至尊法师，法术多样，可治疗、反伤并堆叠奥术增益，全能法师。" },
  { key: "scarletwitch", name: "猩红女巫", en: "Scarlet Witch", cls: "mystic", stars: 6,
    desc: "混沌魔法概率触发异常，伤害上限极高的爆发型法师。" },
  { key: "ghostrider", name: "恶灵骑士", en: "Ghost Rider", cls: "mystic", stars: 5,
    desc: "地狱复仇之魂，火焰与命运审判兼备，自带减益与复活机制。" },
  { key: "thanos", name: "灭霸", en: "Thanos", cls: "cosmic", stars: 6,
    desc: "宇宙霸主，无限手套带来毁灭性爆发，顶级爆发与生存并存。" },
  { key: "captainmarvel", name: "惊奇队长", en: "Captain Marvel", cls: "cosmic", stars: 5,
    desc: "双星能量姿态切换，输出与韧性俱佳，宇宙系主力打手。" },
  { key: "vision", name: "幻视", en: "Vision", cls: "tech", stars: 5,
    desc: "振金合成体，能量汲取与增益护盾，克制能量型对手的科技核心。" },
  { key: "antman", name: "蚁人", en: "Ant-Man", cls: "science", stars: 4,
    desc: "缩小连段节奏奇快，附加强力减速，骚扰与控场并重。" }
];