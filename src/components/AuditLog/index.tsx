import React from 'react';

interface Props {
  logs: string[];
}

export default function AuditLog({ logs }: Props) {
  return (
    <div>
      <span>{logs.join('\n')}</span>
    </div>
  );
}
