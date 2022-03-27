class User < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :doctors, through: :appointments

  validates :first_name, :last_name, :phone, :notes, presence: true
end
