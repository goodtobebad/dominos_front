import React from 'react';
import { HomeView } from './Views'
import { AddMemberService, DeleteMemberService, GetMembersService, UpdateMemberService } from './HttpServices';

const Home = (props) => {

  return (
    <HomeView
      addMember={AddMemberService}
      updateMember={UpdateMemberService}
      deleteMember={DeleteMemberService}
      getMembers={GetMembersService}
      {...props}
    />
  )
}

export { Home }