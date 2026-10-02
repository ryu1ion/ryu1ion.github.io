import xiangcaiLogo from '../assets/logos/xiangcai.jpg';
import cdsnLogo from '../assets/logos/cdsn.png';

// Keep experiences in reverse chronological order.
export const experiences = [
  {
    type: 'Research',
    organization: {
      name: 'CDSN Lab, KAIST',
      link: 'https://cds.kaist.ac.kr/',
      logo: cdsnLogo,
    },
    period: '2025.09 - Present',
    role: 'Research Intern · Advisor: Prof. Dongman Lee',
    location: 'Republic of Korea',
    projects: [
      {
        name: 'Multimodal large language models: reasoning and inference efficiency',
        roles: ['#MLLM', '#Efficient Inference'],
      },
      {
        name: 'Multi-agent collaboration, test-time training, and memory-augmented models',
        roles: ['#Multi-Agent', '#Adaptive AI'],
      },
    ],
  },
  {
    type: 'Work',
    organization: {
      name: 'XiangCai Securities Co., Ltd.',
      link: 'https://www.xcsc.com/',
      logo: xiangcaiLogo,
    },
    period: '2024.05 - 2024.08',
    role: 'Large Language Model Algorithm Engineer',
    location: 'Shanghai, China',
    details: [
      'Developed an LLM-powered digital human for interactive financial consultation.',
      'Integrated speech recognition, speech synthesis, and conversational intelligence for natural, real-time interaction.',
    ],
  },
];
