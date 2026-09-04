import { profile } from '../data/profile';
import '../css/All.css';

function About() {
  return (
    <div className="about" id="about">
      <div className="intro-text">
        Hi, I&apos;m <strong>Tianhao Chen</strong> (陈天皓), a master&apos;s student in the{' '}
        <strong>School of Computing</strong> at{' '}
        <a href={profile.links.kaist} target="_blank" rel="noopener noreferrer">
          <strong>KAIST</strong>
        </a>, with a bachelor&apos;s degree in <strong>Computer Science and Technology</strong> from{' '}
        <a href={profile.links.shanghaiUniversity} target="_blank" rel="noopener noreferrer">
          <strong>Shanghai University</strong>
        </a>. I am fortunate to be advised by{' '}
        <a href={profile.links.advisor} target="_blank" rel="noopener noreferrer">
          <strong>Prof. Dongman Lee</strong>
        </a> and conduct my research at the{' '}
        <a href={profile.links.lab} target="_blank" rel="noopener noreferrer">
          <strong>CDSN Lab</strong>
        </a>.
        <br /><br />
        My research focuses on <strong>multimodal large language models (MLLMs)</strong>, particularly on improving their{' '}
        <strong>reasoning capabilities and inference efficiency</strong>, as well as extending intelligent systems toward{' '}
        <strong>multi-agent collaboration</strong>. Recently, I have also been exploring <strong>test-time training</strong> and{' '}
        <strong>memory-augmented models</strong>, with the broader goal of building AI systems that can{' '}
        <strong>continuously adapt and evolve through interaction and experience</strong>.

        <div className="callout">
          Current research directions include <strong>test-time training</strong> and{' '}
          <strong>memory-augmented models</strong> for continuously adaptive AI systems.
        </div>
      </div>
    </div>
  );
}

export default About;
