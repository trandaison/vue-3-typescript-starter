module.exports = {
  apps : [{
    name: 'vue-3-typescript-starter',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    // args: 'one two',
    // Current directory on server
    cwd: '/home/tran.dai.son/vue-3-typescript-starter/development/current',
    // Config out file for web errors
    error_file: '/home/tran.dai.son/vue-3-typescript-starter/development/logs/web.err.log',
    // Config out file for web logs
    out_file: '/home/tran.dai.son/vue-3-typescript-starter/development/logs/web.out.log',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    development: {
      user : 'tran.dai.son',
      host : '172.16.200.53',
      ref  : 'origin/develop',
      repo : 'git@github.com:trandaison/vue-3-typescript-starter.git',
      path : '/home/tran.dai.son/vue-3-typescript-starter/development',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production'
    },
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && npm run build && pm2 reload ecosystem.config.js --env production'
    }
  }
};
