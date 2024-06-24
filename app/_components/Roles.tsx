'use client';
import React from 'react';

const Roles = ({ roles }: { roles: string[] }) => {
  return (
    <div className='italic'>
      {roles.map((role, key) => {
        if (key === roles.length - 1) {
          return <span key={key}> {role}</span>;
        }
        return <span key={key}> {role} /</span>;
      })}
    </div>
  );
};

export default Roles;
