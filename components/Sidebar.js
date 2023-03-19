import { Avatar, Button, IconButton } from '@material-ui/core'
import styled from 'styled-components'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { FiMoreVertical } from 'react-icons/fi'
import { FiSearch } from 'react-icons/fi'

function Sidebar() {
  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer>
          <IconButton>
            <BsFillChatLeftTextFill />
          </IconButton>
          <IconButton>
            <FiMoreVertical />
          </IconButton>
        </IconsContainer>
      </Header>
      <Search>
        <FiSearch />
        <SearchInput placeholder='Search in chats' />
      </Search>
      <SideBarButton>START A NEW CHAT</SideBarButton>
    </Container>
  )
}

export default Sidebar

const Container = styled.div``
const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`
const SideBarButton = styled(Button)`
  width: 100%;
`
const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`
const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`
const IconsContainer = styled.div``

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`
