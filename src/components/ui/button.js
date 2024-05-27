export default function Button({
  children,
  className,
  type = 'submit',
  ...props
}) {
  return (
    <button
      type={type}
      {...props}
      className={`bg-slate-200 rounded-lg py-2 px-3 text-slate-900 hover:bg-slate-400 transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
}
