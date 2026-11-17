import reaccessImage from '../assets/paper_image/reaccess.png';
import lacoImage from '../assets/paper_image/laco.png';
import baconImage from '../assets/paper_image/bacon.png';
import deltaImage from '../assets/paper_image/delta-forcing.png';

export const publications = [
  {
    id: 'reaccess',
    title: 'ReAccess: Look Once, Stay Focused with Efficient Test Time Memory',
    abstract: (
      'A lightweight memory framework that preserves question-relevant visual evidence during ' +
      'a single prefill and progressively retrieves it to guide frozen vision-language models ' +
      'for efficient, fine-grained visual understanding.'
    ),
    authors: [
      { name: 'Tianhao Chen', link: 'https://ryu1ion.github.io/' },
      { name: 'Yilong Fan' },
      { name: 'Yuheng Wu' },
      { name: 'Xiaobin Hu', role: 'corresponding' },
      { name: 'Dongman Lee', link: 'https://cds.kaist.ac.kr/people/dongmanlee/', role: 'corresponding' },
    ],
    venues: [{ name: 'Under Review', type: 'submission' }],
    image: reaccessImage,
    imageAlt: 'ReAccess framework: question-conditioned memory construction and progressive evidence retrieval.',
    links: {
      arxiv: 'https://arxiv.org/abs/2611.20936',
      project: 'https://ryu1ion.github.io/reaccess/',
      code: 'https://github.com/ryu1ion/reaccess',
    },
  },
  {
    id: 'bacon',
    title: 'Last But Not Least: Boundary Attention CalibratiON for Multimodal KV Cache Compression',
    abstract: (
      'A plug-and-play optimization method that preserves sparse, decision-critical visual ' +
      'information under constrained memory budgets for faster and more reliable multimodal inference.'
    ),
    authors: [
      { name: 'Tianhao Chen', link: 'https://ryu1ion.github.io/' },
      { name: 'Yuheng Wu' },
      { name: 'Kelu Yao' },
      { name: 'Xiaogang Xu' },
      { name: 'Xiaobin Hu', role: 'corresponding' },
      { name: 'Dongman Lee', link: 'https://cds.kaist.ac.kr/people/dongmanlee/', role: 'corresponding' },
    ],
    venues: [{ name: 'EMNLP 2026 Oral', type: 'conference' }],
    image: baconImage,
    imageAlt: 'BACON framework: boundary evidence, intra-layer support, and inter-layer support for KV cache compression.',
    links: {
      arxiv: 'https://arxiv.org/abs/2606.14782',
      project: 'https://ryu1ion.github.io/official_BACON/',
      code: 'https://github.com/ryu1ion/official_BACON',
    },
  },
  {
    id: 'laco',
    title: 'LACO: Adaptive Latent Communication for Collaborative Driving',
    abstract: (
      'A training-free latent communication framework that adapts pretrained driving agents ' +
      'to collaborative multi-agent environments for efficient sharing, low-latency coordination, ' +
      'and cooperative decision-making.'
    ),
    authors: [
      { name: 'Tianhao Chen', link: 'https://ryu1ion.github.io/' },
      { name: 'Yuheng Wu' },
      { name: 'Dongman Lee', link: 'https://cds.kaist.ac.kr/people/dongmanlee/', role: 'corresponding' },
    ],
    venues: [{ name: 'Under Review', type: 'submission' }],
    image: lacoImage,
    imageAlt: 'LACO framework: iterative latent deliberation, cross-horizon saliency attribution, and shallow-stream knowledge distillation.',
    links: {
      arxiv: 'https://arxiv.org/abs/2605.22504',
    },
  },
  {
    id: 'delta-forcing',
    title: 'Delta Forcing: Trust Region Steering for Interactive Autoregressive Video Generation',
    abstract: (
      'A real-time video generation framework that balances teacher supervision with trajectory ' +
      'consistency for stable, responsive, and temporally coherent long-horizon generation.'
    ),
    authors: [
      { name: 'Yuheng Wu' },
      { name: 'Xiangbo Gao' },
      { name: 'Tianhao Chen', link: 'https://ryu1ion.github.io/' },
      { name: 'Xinghao Chen' },
      { name: 'Qing Yin' },
      { name: 'Zhengzhong Tu' },
      { name: 'Dongman Lee', link: 'https://cds.kaist.ac.kr/people/dongmanlee/', role: 'corresponding' },
    ],
    venues: [{ name: 'Under Review', type: 'submission' }],
    image: deltaImage,
    links: {
      arxiv: 'https://arxiv.org/abs/2605.14382',
      project: 'https://delta-forcing-website.vercel.app/',
      code: 'https://github.com/wyhallenwu/DeltaForcing',
    },
  },
];
