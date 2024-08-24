import { NetworkHandler } from '../../../utils'

import { __DOMAIN__ } from '../../../infra'

const __HOST__ = `${__DOMAIN__}/member`

const AddMember = async (data) => {
  const response = await fetch(
    `${__HOST__}`,
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
  )

  return await response.json()
}

const UpdateMember = async (data) => {
  const response = await fetch(
    `${__HOST__}/${data.Id}`,
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
  )

  return await response.json()
}

const UpdateMembers = async (data) => {
  const response = await fetch(
    `${__DOMAIN__}/updateScore`,
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
  )

  return await response.json()
}

const DeleteMember = async (id) => {
    const response = await fetch(
      `${__HOST__}/${id}`,
      {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  
    return await response.json()
}

const GetMembers = async (data) => {
    const response = await fetch(
        `${__DOMAIN__}/members`,
        {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
        }
    )

    return await response.json()
}

export const AddMemberService = NetworkHandler(AddMember)
export const UpdateMemberService = NetworkHandler(UpdateMember)
export const UpdateMembersService = NetworkHandler(UpdateMembers)
export const DeleteMemberService = NetworkHandler(DeleteMember)
export const GetMembersService = NetworkHandler(GetMembers)