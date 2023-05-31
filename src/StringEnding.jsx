import React from 'react';

function StringEnding({ string, ending }) {
  const endsWith = (str, suffix) => {
    return str.endsWith(suffix);
  };

  return (
    <div>
      {endsWith(string, ending) ? (
        <p>{`${string} ends with ${ending}`}</p>
      ) : (
        <p>{`${string} does not end with ${ending}`}</p>
      )}
    </div>
  );
}

export default StringEnding;
