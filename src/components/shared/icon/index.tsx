import React from 'react';
import classnames from 'classnames';
import '@fortawesome/fontawesome-free/css/all.css';

interface Props {
  className: string;
  name: string;
  isSolid?: boolean;
}

const Icon: React.FC<Props> = (props) => {
  const { name, className, isSolid } = props;

  const rootClass = classnames(
    {
      fa: !isSolid,
      fab: isSolid,
      [`fa-${name.replace('fa-', '')}`]: true,
    },
    className,
  );

  return <i className={rootClass} />;
};

export default Icon;
