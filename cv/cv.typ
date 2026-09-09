#show heading: set text(font: "Linux Biolinum")

#show link: underline
#set page(
 margin: (x: 0.9cm, y: 1.3cm),
)
#set par(justify: true)

#set enum(
  numbering: n => "[" + str(n) + "]",
  full: true
)

#let chiline() = {v(-3pt); line(length: 100%); v(-5pt)}

#let github(url) = link(url)[
  #box[
    #grid(
      columns: (auto, auto),
      column-gutter: 0.2em,
      align: (center, horizon),
      image("assets/github.png", width: 1em, height: 1em),
    )
  ]
]

#let paper(url) = link(url)[
  #box[
    #grid(
      columns: (auto, auto),
      column-gutter: 0.2em,
      align: (center, horizon),
      image("assets/doc.png", width: 1em, height: 1em),
    )
  ]
]

#let dataset(url) = link(url)[
  #box[
    #grid(
      columns: (auto, auto),
      column-gutter: 0.2em,
      align: (center, horizon),
      image("assets/dataset.png", width: 1em, height: 1em),
    )
  ]
]

#let exlink(url) = link(url)[
  #box(baseline: 20%)[
    #grid(
      columns: (auto, auto),
      column-gutter: 0.2em,
      align: (center, horizon),
      image("assets/link.png", width: 1em, height: 1em),
    )
  ]
]


= Tianhao Chen

thchen\@kaist.ac.kr | c.tianhao.ai\@gmail.com ｜Wechat: cth34998 
// | #link("https://github.com/wyhallenwu")[github.com/wyhallenwu]

== Education
#chiline()

#link("https://www.kaist.ac.kr/en/")[*KAIST (Korea Advanced Institute of Science and Technology)*], Republic of Korea #h(1fr) 2025.09 -- Present \
MS in School of Computing #h(1fr) Advisor: #link("https://cds.kaist.ac.kr/people/dongmanlee/")[Prof. Dongman Lee] \
- Research field: Multi-Agent System, Efficient Multimodal Inference
#link("https://www.waseda.jp/top/en/")[*Waseda University*], Japan #h(1fr) 2024.10 -- 2025.03 \
Exchange Program in Computer Science and Engineering \
#link("https://www.shu.edu.cn/")[*Shanghai University*], China #h(1fr) 2021 -- 2025 \
B.Eng in Computer Science   
- GPA: 3.75/4.0 (91.58/100), Rank: 4 \%
- Thesis: Research on Key Technologies and Implementation of Natural Scene Image Inpainting

== Publication/Preprints 
#chiline()


// #box(
//   width: 28%,
//   height: 14pt,
//   outset: 1.5pt,
//   inset: 1.5pt,
//   // stroke:1pt + red,
//   radius: 3pt,
//   fill: rgb("#F7E6E6")

// )[
// #box(baseline: 0.3em)[#paper(" ")] #box(baseline: 0em)[*paper*] #h(0.5em) 
// #box(baseline: 0.3em)[#github(" ")] #box(baseline: 0em)[*code*] #h(0.5em) 
// #box(baseline: 0.3em)[#dataset(" ")] #box(baseline: 0em)[*dataset*]
// ]

#enum.item[*LACO: Adaptive Latent Communication for Collaborative Driving* #h(1fr) \
Under Review 
//#h(1fr) #box[#paper("https://arxiv.org/abs/2510.19250")] \
\ _*#underline[Tianhao Chen]*, Yuheng Wu, Dongman Lee_\
- Developed LACO, a training-free latent communication framework that adapts pretrained driving agents to collaborative multi-agent environments, enabling efficient information sharing, low-latency coordination, and strong cooperative decision-making performance.
]
#enum.item[*Last But Not Least: Boundary Attention CalibratiON for Multimodal KV Cache Compression* #h(1fr) \
#text(fill: rgb("#1F4E79"), weight: "bold")[
  EMNLP 2026 Main (15.4% Acceptance Rate)
]  \
_*#underline[Tianhao Chen]*, Yuheng Wu, Kelu Yao, Xiaogang Xu, Xiaobin Hu, Dongman Lee_
- Proposed BACON, a plug-and-play multimodal inference optimization method that preserves sparse, decision-critical visual information under constrained memory budgets, enabling faster and more reliable perception for real-time intelligent agents.
]
#enum.item[*Delta Forcing: Trust Region Steering for Interactive Autoregressive Video Generation* #h(1fr) \
Under Review  \
_Yuheng Wu, Xiangbo Gao, *#underline[Tianhao Chen]*, Xinghao Chen, Qing Yin, Zhengzhong Tu, Dongman Lee_
- Developed Delta Forcing, a real-time video generation framework that mitigates conditioning bias by dynamically balancing teacher supervision with trajectory consistency, enabling more stable, responsive, and temporally coherent long-horizon generation.

]
== Research/Internship Experience
#chiline()
*XiangCai Securities Co., Ltd.* #h(1fr)  2024/05 -- 2024/08 \
Large Language Model Algorithm Engineer  \
- Developed an LLM-powered digital human for interactive financial consultation, integrating speech recognition, speech synthesis, and conversational intelligence to deliver natural, real-time user interactions.
== Project
#chiline()
*Multimodal Temporal Grounding for Instructional Video Understanding* #h(1fr)  2024/06 -- 2024/08 \
_NC State University Summer Research Program_ \
- Developed VPTSL, a cross-modal temporal grounding framework that aligns visual observations, timestamped language, and task instructions to identify decision-relevant moments in long-form videos.

== Awards \& Honors \& Funds
#chiline()

// *KAIST Scholarship* #h(1fr) 2025 - Present
// - Full scholarship awarded for academic studies
*Academic Distinction Scholarship* #h(1fr) 2022 \& 2023 \& 2024 \
- Awarded for outstanding academic achievement during the academic year. 
#link("https://challenge.xfyun.cn/xinghuo?ch=dwm618")[*iFLYTEK AI DEVELOPER COMPETITION AWARD*] #h(1fr) 2024/10
- Ranked Top 50 nationwide.

