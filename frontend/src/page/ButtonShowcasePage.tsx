import { Button } from '@/components/ui/button'; // 경로 맞게 조정
import FigmaIcon from '@/assets/figma.svg?react';
import GithubIcon from '@/assets/github.svg?react';
import JavaScript from '@/assets/javascript.svg?react';
import Jest from '@/assets/jest.svg?react';
import Nextdotjs from '@/assets/nextdotjs.svg?react';
import ReactQuery from '@/assets/react-query.svg?react';
import React from '@/assets/react.svg?react';

export const ButtonShowcasePage = () => {
  return (
    <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* primary */}
      <Button variant="primary" size="default">
        primary default
      </Button>
      <Button variant="primary" size="sm">
        primary sm
      </Button>
      <Button variant="primary" size="lg">
        primary lg
      </Button>
      <Button variant="primary" size="lg">
        <FigmaIcon />
      </Button>
      <Button variant="primary" size="icon">
        <FigmaIcon />
      </Button>

      {/* secondary */}
      <Button variant="secondary" size="default">
        secondary default
      </Button>
      <Button variant="secondary" size="sm">
        secondary sm
      </Button>
      <Button variant="secondary" size="lg">
        secondary lg
      </Button>
      <Button variant="secondary" size="icon">
        <GithubIcon />
      </Button>
      <Button variant="secondary" size="icon">
        <ReactQuery />
      </Button>
      <Button variant="secondary" size="icon">
        <React />
      </Button>

      {/* ghost */}
      <Button variant="ghost" size="default">
        ghost default
      </Button>
      <Button variant="ghost" size="sm">
        ghost sm
      </Button>
      <Button variant="ghost" size="lg">
        ghost lg
      </Button>
      <Button variant="ghost" size="icon">
        <JavaScript />
      </Button>

      {/* utility */}
      <Button variant="utility" size="default">
        utility default
      </Button>
      <Button variant="utility" size="sm">
        utility sm
      </Button>
      <Button variant="utility" size="lg">
        utility lg
      </Button>
      <Button variant="utility" size="icon">
        <Jest />
      </Button>

      {/* danger */}
      <Button variant="danger" size="default">
        danger default
      </Button>
      <Button variant="danger" size="sm">
        danger sm
      </Button>
      <Button variant="danger" size="lg">
        danger lg
      </Button>
      <Button variant="danger" size="icon">
        <Nextdotjs />
      </Button>

      {/* external */}
      <Button variant="external" size="default">
        external default
      </Button>
      <Button variant="external" size="sm">
        external sm
      </Button>
      <Button variant="external" size="lg">
        external lg
      </Button>
      {/* disabled */}
      <Button variant="danger" size="default" disabled>
        danger default
      </Button>
      <Button variant="danger" size="sm" disabled>
        danger sm
      </Button>
      <Button variant="danger" size="lg" disabled>
        danger lg
      </Button>
      <Button variant="danger" size="icon" disabled>
        danger icon
      </Button>
      <Button variant="external" size="default" disabled>
        external default
      </Button>
      <Button variant="external" size="sm" disabled>
        external sm
      </Button>
      <Button variant="external" size="lg" disabled>
        external lg
      </Button>
    </div>
  );
};
