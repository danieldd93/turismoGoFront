<template>
  <q-page class="login-page">
    <div class="login-card q-pa-md">
      <q-card-section class="text-center q-py-xl">
        <div style="position: absolute; top: 10px; left: 10px; z-index: 1000">
          <img
            src="https://i.pinimg.com/564x/50/a4/c3/50a4c316799db6a581fcda77bb257db6.jpg"
            style="height: 100px; width: auto"
          />
        </div>
        <q-avatar size="80px" class="q-mb-md">
          <q-icon name="person" size="56px" color="red" />
        </q-avatar>
        <div style="font-size: 1.5em;color:black;font-weight: 100" class="text-center">Login</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input
            outlined
            v-model="username"
            label="Username"
            dense
            class="q-mb-md"
            prepend-inner-icon="account_circle"
            color="red"
            required
          />
          <q-input
            outlined
            v-model="password"
            label="Password"
            type="password"
            dense
            class="q-mb-md"
            prepend-inner-icon="lock"
            color="red"
            required
          />
          <div class="text-center q-mb-md">
            <q-btn
              flat
              label="Se olvido la contraseña ?"
              color="red"
              @click="onForgotPassword"
            />
          </div>
          <q-btn
            type="submit"
            icon="login"
            color="red"
            label="Entrar"
            class="full-width q-mb-md"
            unelevated
            style="background: linear-gradient(to right, #ff6f61, #d32f2f)"
          />
        </q-form>
        <div class="row justify-center q-mt-md">
          <q-btn fab mini round color="blue-8" class="q-mx-xs">
            <q-icon name="facebook" />
          </q-btn>
          <q-btn fab mini round color="deep-purple" class="q-mx-xs">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/600px-Instagram_logo_2022.svg.png"
              alt="Instagram"
              style="width: 24px; height: 24px"
            />
          </q-btn>
          <q-btn fab mini round color="light-blue" class="q-mx-xs">
            <img
              src="https://i.pinimg.com/564x/7d/44/d5/7d44d55ead7dda48bd95632d92fb259d.jpg"
              alt="Twitter"
              style="width: 24px; height: 24px"
            />
          </q-btn>
        </div>
        <div class="q-mt-md text-center">O registrate manualmente</div>
        <q-btn
          flat
          label="REGISTRARSE"
          color="red"
          class="q-mt-md full-width"
          @click="onSignUp"
        />
      </q-card-section>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      // Aquí puedes manejar la lógica del login
      // Por ejemplo, puedes agregar una llamada a una API para autenticar al usuario
      // Si el login es exitoso, redirige a la página de productos
      this.$router.push("/products");
    },
    onForgotPassword() {
      // Handle forgot password logic
      alert("Forgot Password clicked");
    },
    onSignUp() {
      // Handle sign up logic
      alert("Sign Up clicked");
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #ff6f61 0%, #d32f2f 100%);
}

.login-card {
  background: rgba(255, 255, 255, 1);
  border-radius: 15px;
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.q-input__inner {
  color: #000;
}

.q-input__inner:focus,
.q-input__inner:active,
.q-input__inner {
  border-color: rgba(0, 0, 0, 0.3);
}
</style>
