interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, onClick, className = '', type = 'button' }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 bg-[#394287] text-white border-2 border-white rounded-full hover:bg-white hover:text-[#394287] hover:border-[#394287] transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}
