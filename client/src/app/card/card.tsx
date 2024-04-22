'use client';

import { Button } from '@/components/ui/button';
import './card.css';
import custom from './custom.module.scss';
import { Fragment, useState } from 'react';
import clsx from 'clsx';

export default function Card() {
  const [state, setState] = useState(true);
  return (
    <Fragment>
      <Button className="card">Card</Button>
      <Button
        className={clsx('card', {
          [custom.customCard]: state,
        })}
        onClick={() => setState(!state)}
      >
        Card
      </Button>
    </Fragment>
  );
}
