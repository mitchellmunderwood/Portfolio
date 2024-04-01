import React from 'react';
import './index.css';
import Body from '../../components/Body/index';
import Album from '../../components/Album/index';
import { useStoreContext } from '../../store/store';
import Card from '../../components/Card/index';
import SkillSelect from '../../components/SkillSelect';

function Portfolio() {
  const [state] = useStoreContext();

  return (
    <Body>
      <h1 className="portfolio-title">Portfolio</h1>
      <SkillSelect />
      <Album>
        {state.projects.map((project) => {
          if (projectIncludesSkills(project, state.filteredSkills)) {
            return <Card key={project.title} content={project} />;
          }
        })}
      </Album>
    </Body>
  );
}

export default Portfolio;

function projectIncludesSkills(project, skills) {
  const projectSkills = project.tags.map((tag) => {
    if (tag.type === 'Skill') {
      return tag.name;
    }
  });
  for (let i = 0; i < skills.length; i++) {
    if (!projectSkills.includes(skills[i])) {
      console.log(`false for ${project.name}`);
      return false;
    }
  }
  return true;
}
