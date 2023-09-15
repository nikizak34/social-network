import {
    profileReducer,
    addPostActionCreator,
    setUserProfile,
    setStatus,
} from './profileReducer';

describe('profileReducer', () => {
    it('should add a new post', () => {
        const initialState = {
            postData: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It s my firs post', likesCount: 11 },
            ],
            profile: {
                aboutMe: '',
                contacts: {
                    facebook: '',
                    website: '',
                    vk: '',
                    twitter: '',
                    instagram: '',
                    youtube: '',
                    github: '',
                    mainLink: '',
                },
                lookingForAJob: false,
                lookingForAJobDescription: '',
                fullName: '',
                userId: 0,
                photos: {
                    small: undefined,
                    large: undefined,
                },
            },
            status: '',
            newPostText: '',
            photo:''
        };

        const newPostText = 'New post';
        const action = addPostActionCreator(newPostText);
        const newState = profileReducer(initialState, action);

        expect(newState.postData.length).toBe(3);
        expect(newState.postData[2].message).toBe(newPostText);
        expect(newState.postData[2].likesCount).toBe(0);
    });

    it('should set user profile', () => {
        const initialState = {
            postData: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It s my firs post', likesCount: 11 },
            ],
            profile: {    aboutMe: '',
                contacts: {
                    facebook: '',
                    website: '',
                    vk: '',
                    twitter: '',
                    instagram: '',
                    youtube: '',
                    github: '',
                    mainLink: '',
                },
                lookingForAJob: false,
                lookingForAJobDescription: '',
                fullName: '',
                userId: 0,
                photos: {
                    small: undefined,
                    large: undefined,
                },},
            status: '',
            newPostText: '',
            photo: ''
        };

        const profile = {
            aboutMe: 'About me',
            contacts: {
                facebook: 'facebook.com',
                website: 'example.com',
                vk: 'vk.com',
                twitter: 'twitter.com',
                instagram: 'instagram.com',
                youtube: 'youtube.com',
                github: 'github.com',
                mainLink: 'mainlink.com',
            },
            lookingForAJob: true,
            lookingForAJobDescription: 'Looking for a job',
            fullName: 'John Doe',
            userId: 1,
            photos: {
                small: 'small-photo-url',
                large: 'large-photo-url',
            },
        };

        const action = setUserProfile(profile);
        const newState = profileReducer(initialState, action);

        expect(newState.profile).toEqual(profile);
    });

    it('should set status', () => {
        const initialState = {
            postData: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It s my firs post', likesCount: 11 },
            ],
            profile: {    aboutMe: '',
                contacts: {
                    facebook: '',
                    website: '',
                    vk: '',
                    twitter: '',
                    instagram: '',
                    youtube: '',
                    github: '',
                    mainLink: '',
                },
                lookingForAJob: false,
                lookingForAJobDescription: '',
                fullName: '',
                userId: 0,
                photos: {
                    small: undefined,
                    large: undefined,
                },},
            status: '',
            newPostText: '',
            photo: ''
        };

        const status = 'New status';
        const action = setStatus(status);
        const newState = profileReducer(initialState, action);

        expect(newState.status).toBe(status);
    });
});
