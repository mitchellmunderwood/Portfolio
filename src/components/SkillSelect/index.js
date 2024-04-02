import { useStoreContext } from '../../store/store';
import { TOGGLE_SKILL } from '../../store/actions';
import './index.css';

function SkillSelect() {
  const [state, dispatch] = useStoreContext();

  return (
    <div className="skill-select">
      <p className="skill-select-title">Project Includes:</p>
      <form className="skill-select-form">
        {state.skillSet.map((skill) => {
          return (
            <label className="skill-select-label" key={skill}>
              <input
                type="radio"
                name={skill}
                value={skill}
                checked={state.filteredSkills.includes(skill)}
                onClick={() => dispatch({ type: TOGGLE_SKILL, skill })}
              ></input>
              {skill}
            </label>
          );
        })}
      </form>
    </div>
  );
}

export default SkillSelect;
