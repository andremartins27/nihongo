import { NavLink } from 'react-router-dom';

function getClass(isActive, isPending) {
  let classes = 'item';
  if (isActive) {
    classes += ' active';
  }
  return classes;
}

function Menu() {
  return (
    <div className='ui inverted segment'>
      <div className='ui inverted secondary pointing menu'>
        <NavLink
          className={getClass()}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={getClass()}
          to='/verbs'
        >
          Verb Table
        </NavLink>
        <NavLink
          className={getClass()}
          to='/games/guess-meaning'
        >
          Verb Meaning
        </NavLink>
        <NavLink
          className={getClass()}
          to='/games/guess-verb'
        >
          Verb Guessing
        </NavLink>
        <NavLink
          className={getClass()}
          to='/games/present-conjugation'
        >
          Present Conjugation
        </NavLink>
        <NavLink
          className={getClass()}
          to='/games/guess-type'
        >
          Verb Type
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
