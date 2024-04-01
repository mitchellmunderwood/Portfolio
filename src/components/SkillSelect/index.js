import { useStoreContext } from '../../store/store';
import { TOGGLE_SKILL } from '../../store/actions';

function SkillSelect() {
  const [state, dispatch] = useStoreContext();

  return (
    <div>
      <p>Project Includes:</p>
      <form>
        {state.skillSet.map((skill) => {
          return (
            <label key={skill}>
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
