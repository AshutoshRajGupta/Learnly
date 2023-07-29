import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "As you get older, three things happen. The first is your memory goes, and I can’t remember the other two.",
    img: null,
    imgAlt: "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Phobe",
          lastName: "Buffay",
          username: "phobe_buffay",
          avatarURL: "",
        },
        {
          _id: uuid(),
          firstName: "Ross",
          lastName: "Geller",
          username: "ross_geller",
          avatarURL: "",
        },
      ],
      dislikedBy: [],
    },
    username: "test_test",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "chandler_bing",
        text: "Interesting",
        avatarURL: "",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "ross_geller",
        text: "Wow!",
        avatarURL: "",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "When I’m in social situations, I always hold onto my glass. It makes me feel comfortable and secure and I don’t have to shake hands. :P",
    img: null,
    imgAlt: "",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Chandler",
          lastName: "Bing",
          username: "chandler_bing",
          avatarURL: "",
        },
        {
          _id: uuid(),
          firstName: "Ross",
          lastName: "Geller",
          username: "ross_geller",
          avatarURL: "",
        },
        {
          _id: uuid(),
          firstName: "test",
          lastName: "test",
          username: "test_test",
          avatarURL:
            "https://images.unsplash.com/photo-1524860769472-246b6afea403?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        },
      ],
      dislikedBy: [],
    },
    username: "nick_deshwani",
    comments: [
      {
        _id: uuid(),
        username: "ross_geller",
        text: "Interesting",
        avatarURL: "",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "nick_deshwani",
        text: "Wow!",
        avatarURL:
          "https://res.cloudinary.com/dkwrbu6qr/image/upload/v1654851343/images_qin5ab.jpg",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Yeah, well. I don’t try to be awesome. It just comes natural.",
    img: null,
    imgAlt: "",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Chandler",
          lastName: "Bing",
          username: "chandler_bing",
          avatarURL: "",
        },
        {
          _id: uuid(),
          firstName: "Ross",
          lastName: "Geller",
          username: "ross_geller",
          avatarURL: "",
        },
        {
          _id: uuid(),
          firstName: "test",
          lastName: "test",
          username: "test_test",
          avatarURL:
            "https://images.unsplash.com/photo-1524860769472-246b6afea403?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        },
      ],
      dislikedBy: [],
    },
    username: "phobe_buffay",
    comments: [
      {
        _id: uuid(),
        username: "chandler_bing",
        text: "Interesting",
        avatarURL: "",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "ross_geller",
        text: "Wow!",
        avatarURL: "",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: "2022-06-06T18:08:40+05:30",
    updatedAt: "2022-06-06T18:08:40+05:30",
  },
  {
    _id: uuid(),
    content: "I love the rain. It's my favorite weather.",
    img: "https://res.cloudinary.com/dkwrbu6qr/image/upload/v1656232135/rain_w1hx32.jpg",
    imgAlt: "rain",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Chandler",
          lastName: "Bing",
          username: "chandler_bing",
          avatarURL: "",
        },
        {
          _id: uuid(),
          firstName: "Ross",
          lastName: "Geller",
          username: "ross_geller",
          avatarURL: "",
        },
        {
          _id: uuid(),
          firstName: "test",
          lastName: "test",
          username: "test_test",
          avatarURL:
            "https://images.unsplash.com/photo-1524860769472-246b6afea403?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        },
      ],
      dislikedBy: [],
    },
    username: "phobe_buffay",
    comments: [
      {
        _id: uuid(),
        username: "chandler_bing",
        text: "Interesting",
        avatarURL: "",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "ross_geller",
        text: "Wow!",
        avatarURL: "",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: "2022-06-06T18:08:40+05:30",
    updatedAt: "2022-06-06T18:08:40+05:30",
  },
  {
    _id: uuid(),
    content: "It's the imperfections that make things beautiful",
    img: null,
    imgAlt: "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Chandler",
          lastName: "Bing",
          username: "chandler_bing",
          avatarURL: "",
        },
        {
          _id: uuid(),
          firstName: "Ross",
          lastName: "Geller",
          username: "ross_geller",
          avatarURL: "",
        },
      ],
      dislikedBy: [],
    },
    username: "nick_deshwani",
    comments: [
      {
        _id: uuid(),
        username: "chandler_bing",
        text: "Interesting",
        avatarURL: "",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "mark_darwin",
        text: "Wow!",
        avatarURL:
          "https://res.cloudinary.com/dkwrbu6qr/image/upload/v1654851622/uryrbl2p1lwo4y1ezgs1.jpg",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: "2022-06-06T18:08:40+05:30",
    updatedAt: "2022-06-06T18:08:40+05:30",
  },
  {
    _id: uuid(),
    content:
      "Life is a succession of lessons which must be lived to be understood",
    img: null,
    imgAlt: "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Chandler",
          lastName: "Bing",
          username: "chandler_bing",
          avatarURL: "",
        },
        {
          _id: uuid(),
          firstName: "Ross",
          lastName: "Geller",
          username: "ross_geller",
          avatarURL: "",
        },
      ],
      dislikedBy: [],
    },
    username: "chandler_bing",
    comments: [
      {
        _id: uuid(),
        username: "chandler_bing",
        text: "Interesting",
        avatarURL: "",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "phobe_buffay",
        text: "Wow!",
        avatarURL: "",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: "2022-05-06T18:08:40+05:30",
    updatedAt: "2022-06-06T18:08:40+05:30",
  },
  {
    _id: uuid(),
    content:
      "I prefer not to think before speaking. I like being as surprised as everyone else by what comes out of my mouth.",
    img: null,
    imgAlt: "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Chandler",
          lastName: "Bing",
          username: "chandler_bing",
          avatarURL: "",
        },
        {
          _id: uuid(),
          firstName: "Ross",
          lastName: "Geller",
          username: "ross_geller",
          avatarURL: "",
        },
      ],
      dislikedBy: [],
    },
    username: "mark_darwin",
    comments: [
      {
        _id: uuid(),
        username: "chandler_bing",
        text: "Interesting",
        avatarURL: "",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "phobe_buffay",
        text: "Wow!",
        avatarURL: "",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: "2022-04-04T18:08:40+05:30",
    updatedAt: "2022-04-06T18:08:40+05:30",
  },
  {
    _id: uuid(),
    content:
      "Why don’t you stop worrying about sounding smart and just be yourself.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Chandler",
          lastName: "Bing",
          username: "chandler_bing",
        },
        {
          _id: uuid(),
          firstName: "Ross",
          lastName: "Geller",
          username: "ross_geller",
        },
      ],
      dislikedBy: [],
    },
    username: "monica_geller",
    comments: [
      {
        _id: uuid(),
        username: "chandler_bing",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "phobe_buffay",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: "2022-06-04T18:08:40+05:30",
    updatedAt: "2022-06-06T18:08:40+05:30",
  },
  {
    _id: uuid(),
    content: "Unagi is a total state of awareness.",
    img: null,
    imgAlt: "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Chandler",
          lastName: "Bing",
          username: "chandler_bing",
          avatarURL: "",
        },
        {
          _id: uuid(),
          firstName: "Ross",
          lastName: "Geller",
          username: "ross_geller",
          avatarURL: "",
        },
      ],
      dislikedBy: [],
    },
    username: "ross_geller",
    comments: [
      {
        _id: uuid(),
        username: "chandler_bing",
        text: "Interesting",
        avatarURL: "",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "phobe_buffay",
        text: "Wow!",
        avatarURL: "",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: "2022-06-04T18:08:40+05:30",
    updatedAt: "2022-06-06T18:08:40+05:30",
  },
];
