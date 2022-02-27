import { BsCalendarDate } from 'react-icons/bs';
import { GrTasks } from 'react-icons/gr';
import { GoGraph } from 'react-icons/go';
import { RiTeamFill } from 'react-icons/ri';
import { IoSettingsSharp } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';
import { FaUserPlus } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';

const NAV_ITEMS = {
  USER: [
    { href: '/', icon: BsCalendarDate, innerHTML: '予定', },
    { href: '/', icon: GrTasks, innerHTML: 'タスク', },
    { href: '/', icon: GoGraph, innerHTML: 'グラフ', },
    { href: '/', icon: RiTeamFill, innerHTML: 'グループ', },
    { href: '/', icon: IoSettingsSharp, innerHTML: '設定', },
    { href: '/', icon: HiOutlineMail, innerHTML: 'お問い合わせ', },
  ],
  GUEST: [
    { href: '/signup', icon: FaUserPlus, innerHTML: '新規登録', },
    { href: '/signin', icon: FiLogIn, innerHTML: 'ログイン', },
    { href: '/', icon: HiOutlineMail, innerHTML: 'お問い合わせ', },
  ]
}

export default NAV_ITEMS;