import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  icon,
  iconPosition = 'right',
  href,
  external = false,
  children,
  className = '',
  ...props
}) => {
  const baseClasses = variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'inline-flex items-center gap-2 px-4 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors cursor-pointer';

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
      <span className="btn-label">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${className}`}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {content}
    </button>
  );
};
