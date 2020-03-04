from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)


class UserManager(BaseUserManager):
    def create_user(self, email, password, full_name=None,
                    is_active=True, is_staff=False, is_admin=False):
        if not email:
            raise ValueError('Users must have an email address')
        if not password:
            raise ValueError('Users must have a password')

        user = self.model(
            email=self.normalize_email(email)
        )

        user.set_password(password)
        user.full_name = full_name,
        user.active = is_active
        user.staff = is_staff
        user.admin = is_admin
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, full_name=None):
        user = self.create_user(
            full_name=full_name,
            email=email,
            password=password
        )
        user.staff = True
        user.admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255, unique=True
    )
    full_name = models.CharField(
        max_length=60, default=None, blank=True, null=True)
    phone_number = models.IntegerField(blank=True, null=True)
    favorites = models.CharField(max_length=250)
    created_at = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=False)
    staff = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def get_full_name(self):
        return self.full_name

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_active(self):
        return self.active

    @property
    def is_staff(self):
        return self.staff

    @property
    def is_admin(self):
        return self.admin
