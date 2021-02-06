import React from 'react';

type LeftMenuOnProfilePageProps = {
    label: string;                      // メニューの項目名
    numberOfNotification: number;       // 通知の数
    isDisplaying: boolean;              // その項目のページが表示されている場合はtrueが渡される
}

const LeftMenuOnProfilePage: React.FC<LeftMenuOnProfilePageProps> = (props) => {
    const {label, numberOfNotification, isDisplaying} = props;

    return (
        <></>
    );
}