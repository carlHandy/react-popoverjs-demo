import React, { useRef, useEffect, useState } from 'react';
import { PopoverComponent } from 'react-popoverjs';

const App: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const content: string = `Welcome to react-popoverjs!
      Use this library to create popovers in your React applications.
      You can customize the content, position, and style of the popovers.
      It uses the baseline browser Popover API, and Popper.js for positioning, so it's lightweight and fast.`;

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