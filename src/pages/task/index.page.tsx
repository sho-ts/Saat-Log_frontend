import { css } from '@emotion/react';
import Head from 'next/head';
import { withUserLayout } from '@layouts';
import { SubTitle, Button, TextField } from '@atoms';
import { Modal, FormItem } from '@molecures';
import { useModal } from '@/hooks';

const Task = () => {
  const [isOpen, handleModalOpen, handleModalClose] = useModal();

  return (
    <>
      <div>
        <SubTitle>本日のタスク</SubTitle>
        <Button onClick={handleModalOpen}>タスクを新規作成</Button>
      </div>
      <Modal
        isOpen={isOpen}
        handleModalClose={handleModalClose}
        innerStyle={css`
          width: 100%;
          max-width: 500px;
        `}
      >
        <FormItem heading='タスク概要'>
          <TextField />
        </FormItem>
        <FormItem heading='タスク詳細'>
          <TextField rows={10} />
        </FormItem>
        <Button>タスクを追加</Button>
      </Modal>
    </>
  );
};

export default withUserLayout(Task, 'タスク');
