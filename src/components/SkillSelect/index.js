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
            // eslint-disable-next-line react/jsx-key
            <input
              className={'skill-select-button ' + (state.filteredSkills.includes(skill) ? 'selected' : 'unselected')}
              type="button"
              name={skill}
              value={skill}
              onClick={() => dispatch({ type: TOGGLE_SKILL, skill })}
            ></input>
          );
        })}
      </form>
    </div>
  );
}

export default SkillSelect;
