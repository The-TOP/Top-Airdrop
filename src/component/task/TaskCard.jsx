import React from 'react';
import { motion } from 'framer-motion';
import { FiCopy } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const TaskCard = ({
  title,
  description,
  inputValue,
  inputType = "text",
  onInputChange,
  inputReadOnly = false,
  showInput = false,
  showButton = false,
  buttonLabel = "Claim",
  buttonDisabled = false,
  onButtonClick,
  showCopy = false,
  showActionItems = [],
  onCopyClick,
  buttonLink, // for "Go" buttons
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-zinc-900 text-white p-4 rounded-xl shadow-md w-full space-y-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-zinc-400">{description}</p>

      {showInput && (
        <div className="flex items-center gap-2">
          <input
            type={inputType}
            value={inputValue}
            onChange={onInputChange}
            readOnly={inputReadOnly}
            className="bg-zinc-800 text-white p-2 rounded-md w-full text-sm outline-none"
          />
          {showCopy && (
            <button
              onClick={onCopyClick}
              className="border border-green-400 px-3 py-2 rounded-lg text-sm hover:bg-green-600"
            >
              <FiCopy />
            </button>
          )}
          {buttonLink && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(buttonLink)}
              className="border border-green-400 px-4 py-2 rounded-lg text-sm hover:bg-green-600"
            >
              Go
            </motion.button>
          )}
        </div>
      )}

      {showButton && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-lg text-sm border ${
            buttonDisabled ? 'bg-green-600 cursor-not-allowed' : 'border-green-400 hover:bg-green-600'
          }`}
          disabled={buttonDisabled}
          onClick={onButtonClick}
        >
          {buttonDisabled ? 'Claimed' : buttonLabel}
        </motion.button>
      )}

      {showActionItems.length > 0 && (
        <div className="space-y-2">
          {showActionItems.map(({ label, done, onClick }, index) => (
            <div key={index} className="flex justify-between items-center">
              <p className="text-sm">{label}</p>
              <button
                onClick={onClick}
                className={`px-4 py-1 rounded-lg text-sm border ${
                  done ? 'bg-green-600 cursor-not-allowed' : 'border-green-400 hover:bg-green-600'
                }`}
                disabled={done}
              >
                {done ? 'Done' : 'Do it'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskCard;
