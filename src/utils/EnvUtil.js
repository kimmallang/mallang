const EnvUtil = {
    isDev: () => window.location.href.startsWith('http://local'),
    isReal: () => window.location.href.startsWith('https://mallang.herokuapp.com'),
};

export default EnvUtil;