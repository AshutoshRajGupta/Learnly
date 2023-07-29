import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "test",
    lastName: "test",
    email: "test@gmail.com",
    username: "test_test",
    password: "test@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Welcome to my world",
    website: "https://test.tech",
    avatarURL:
      "https://images.unsplash.com/photo-1524860769472-246b6afea403?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    following: [
      {
        _id: uuid(),
        firstName: "Nikhil",
        lastName: "Deshwani",
        username: "nick_deshwani",
        avatarURL:
          "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      },
      {
        _id: uuid(),
        firstName: "Phobe",
        lastName: "Buffay",
        username: "phobe_buffay",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Phobe",
        lastName: "Buffay",
        username: "phobe_buffay",
      },
      {
        _id: uuid(),
        firstName: "Ross",
        lastName: "Geller",
        username: "ross_geller",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Nikhil",
    lastName: "Deshwani",
    email: "deshwaninikhil@gmail.com",
    username: "nick_deshwani",
    password: "nikhil123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Web Developer",
    website: "https://nikil-deshwani-portfolio.netlify.app/",
    avatarURL:
      "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
    following: [
      {
        _id: uuid(),
        firstName: "Ross",
        lastName: "Geller",
        username: "ross_geller",
        avatarURL: "",
      },
      {
        _id: uuid(),
        firstName: "Phobe",
        lastName: "Buffay",
        username: "phobe_buffay",
        avatarURL:
          "https://res.cloudinary.com/dkwrbu6qr/image/upload/v1656232294/Phoebe-Guitar_l4dmys.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Phobe",
        lastName: "Buffay",
        username: "phobe_buffay",
        avatarURL:
          "https://res.cloudinary.com/dkwrbu6qr/image/upload/v1656232294/Phoebe-Guitar_l4dmys.jpg",
      },
      {
        _id: uuid(),
        firstName: "Chandler",
        lastName: "Bing",
        username: "chandler_bing",
        avatarURL:
          "https://res.cloudinary.com/dkwrbu6qr/image/upload/v1654851785/buikcfn54xbqxdea3ixf.jpg",
      },
      {
        _id: uuid(),
        firstName: "Ross",
        lastName: "Geller",
        username: "ross_geller",
        avatarURL: "",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Mark",
    lastName: "Darwin",
    email: "markdarwin@gmail.com",
    username: "mark_darwin",
    password: "mark123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "What should I put here?",
    website: "http://dummy.com/",
    avatarURL:
      "https://res.cloudinary.com/dkwrbu6qr/image/upload/v1654851622/uryrbl2p1lwo4y1ezgs1.jpg",
    following: [
      {
        _id: uuid(),
        firstName: "Nikhil",
        lastName: "Deshwani",
        username: "nick_deshwani",
        avatarURL:
          "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      },
      {
        _id: uuid(),
        firstName: "Phobe",
        lastName: "Buffay",
        username: "phobe_buffay",
        avatarURL:
          "https://res.cloudinary.com/dkwrbu6qr/image/upload/v1656232294/Phoebe-Guitar_l4dmys.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Phobe",
        lastName: "Buffay",
        username: "phobe_buffay",
        avatarURL:
          "https://res.cloudinary.com/dkwrbu6qr/image/upload/v1656232294/Phoebe-Guitar_l4dmys.jpg",
      },
      {
        _id: uuid(),
        firstName: "Ross",
        lastName: "Geller",
        username: "ross_geller",
        avatarURL: "",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Chandler",
    lastName: "Bing",
    email: "chandler@gmail.com",
    username: "chandler_bing",
    password: "chandler123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "What should I put here?",
    website: "http://dummy.com/",
    avatarURL:
      "https://res.cloudinary.com/dkwrbu6qr/image/upload/v1654851785/buikcfn54xbqxdea3ixf.jpg",
    following: [
      {
        _id: uuid(),
        firstName: "Nikhil",
        lastName: "Deshwani",
        username: "nick_deshwani",
        avatarURL:
          "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      },
      {
        _id: uuid(),
        firstName: "Phobe",
        lastName: "Buffay",
        username: "phobe_buffay",
        avatarURL:
          "https://res.cloudinary.com/dkwrbu6qr/image/upload/v1656232294/Phoebe-Guitar_l4dmys.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Phobe",
        lastName: "Buffay",
        username: "phobe_buffay",
        avatarURL:
          "https://res.cloudinary.com/dkwrbu6qr/image/upload/v1656232294/Phoebe-Guitar_l4dmys.jpg",
      },
      {
        _id: uuid(),
        firstName: "Ross",
        lastName: "Geller",
        username: "ross_geller",
        avatarURL: "",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Phobe",
    lastName: "Buffay",
    email: "phobe@gmail.com",
    username: "phobe_buffay",
    password: "phobe123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "What should I put here?",
    website: "http://dummy.com/",
    avatarURL:
      "https://res.cloudinary.com/dkwrbu6qr/image/upload/v1656232294/Phoebe-Guitar_l4dmys.jpg",
    following: [
      {
        _id: uuid(),
        firstName: "Nikhil",
        lastName: "Deshwani",
        username: "nick_deshwani",
        avatarURL:
          "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Ross",
        lastName: "Geller",
        username: "ross_geller",
        avatarURL: "",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Monica",
    lastName: "Geller",
    email: "monica@gmail.com",
    username: "monica_geller",
    password: "monica123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "What should I put here?",
    website: "http://dummy.com/",
    avatarURL: "",
    following: [
      {
        _id: uuid(),
        firstName: "Nikhil",
        lastName: "Deshwani",
        username: "nick_deshwani",
        avatarURL:
          "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      },
      {
        _id: uuid(),
        firstName: "Phobe",
        lastName: "Buffay",
        username: "phobe_buffay",
        avatarURL:
          "https://res.cloudinary.com/dkwrbu6qr/image/upload/v1656232294/Phoebe-Guitar_l4dmys.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Phobe",
        lastName: "Buffay",
        username: "phobe_buffay",
        avatarURL:
          "https://res.cloudinary.com/dkwrbu6qr/image/upload/v1656232294/Phoebe-Guitar_l4dmys.jpg",
      },
      {
        _id: uuid(),
        firstName: "Ross",
        lastName: "Geller",
        username: "ross_geller",
        avatarURL: "",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Ross",
    lastName: "Geller",
    email: "ross@gmail.com",
    username: "ross_geller",
    password: "ross123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "What should I put here?",
    website: "http://dummy.com/",
    avatarURL: "",
    following: [
      {
        _id: uuid(),
        firstName: "Nikhil",
        lastName: "Deshwani",
        username: "nick_deshwani",
        avatarURL: "",
      },
      {
        _id: uuid(),
        firstName: "Phobe",
        lastName: "Buffay",
        username: "phobe_buffay",
        avatarURL:
          "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Phobe",
        lastName: "Buffay",
        username: "phobe_buffay",
        avatarURL:
          "https://res.cloudinary.com/dkwrbu6qr/image/upload/v1656232294/Phoebe-Guitar_l4dmys.jpg",
      },
    ],
  },
];
