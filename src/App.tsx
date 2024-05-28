import React, { useRef, useEffect, useState } from 'react';
import { PopoverComponent } from 'react-popoverjs';

const App: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const content: string = `
    <div>
      Welcome to react-popoverjs!<br />
      Use this library to create popovers in your React applications.<br />
      You can customize the content, position, and style of the popovers.<br />
      It utilizes the standard <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Popover_API">browser Popover API</a>, and Popper.js for positioning, ensuring it is lightweight and fast.
    </div>
  `;

  useEffect(() => {
    if (buttonRef.current) {
      setTarget(buttonRef.current);
    } else {
      console.log('Button ref is not attached yet.');
    }
  }, []);

  return (
    <div style={styles.container}>
      <button ref={buttonRef} style={styles.button}>Toggle Popover</button>
      {target && (
        <PopoverComponent 
          target={target} content={content} position='bottom'
          style={styles.popover}>
          <></> {/* Empty fragment as children */}
        </PopoverComponent>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '10px',
    boxSizing: 'border-box' as 'border-box',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
  },
  popover: {
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid black',
  },
  '@media (max-width: 600px)': {
    container: {
      flexDirection: 'column' as 'column',
      height: 'auto',
    },
    button: {
      width: '100%',
      marginBottom: '10px',
    },
    popover: {
      marginLeft: '0',
      marginTop: '10px',
    },
  },
};

export default App;