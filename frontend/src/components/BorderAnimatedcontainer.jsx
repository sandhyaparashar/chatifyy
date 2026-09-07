function BorderAnimatedContainer({ children }) {
  return (
    <div
      className="
        w-full
        h-full
        p-[1px]
        rounded-2xl
        border
        border-transparent
        box-border
        flex
        overflow-hidden
        animate-border
        [background:linear-gradient(
          45deg,
          #172033,
          theme(colors.slate.600/.48),
          theme(colors.slate.500),
          theme(colors.cyan.300),
          theme(colors.cyan.500),
          theme(colors.slate.600/.48)
        )]
      "
    >
      {children}
    </div>
  );
}

export default BorderAnimatedContainer;