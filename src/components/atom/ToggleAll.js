/*@jsx Reilly.createElement*/
import Reilly from '../../lib/reilly/Reilly.js';

export function ToggleAll() {
  return (
    <div>
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label>
        <button onclick={e => console.warn('plz implement toggle-all!')}>
          🎊
        </button>
      </label>
    </div>
  );
}
