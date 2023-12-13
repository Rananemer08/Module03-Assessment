import Users from '../Models/usersModel.js'
import sequelize from "../Config/connection.js"
export const getAllUsers = async (req, res) => {
    try {
      const allUsers = await Users.findAll();
      res.status(200).json({
        data: allUsers,
        status: 200,
        success: true,
        message: 'All users found!',
      });
    } catch (err) {
      res.status(500).json({
        data: null,
        status: 500,
        success: false,
        message: err.message,
      });
    }
  };


//get one user
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findByPk(id);

    if (!user) {
      return res.status(404).json({
        data: null,
        status: 404,
        success: false,
        message: 'User not found!',
      });
    }

    res.status(200).json({
      data: user,
      status: 200,
      success: true,
      message: 'User found!',
    });
  } catch (err) {
    res.status(500).json({
      data: null,
      status: 500,
      success: false,
      message: err.message,
    });
  }
};

  
// create a new user and check if already exists
  export const createUser = async (req, res) => {
    try {
      const {
        username,
        password,
        first_name,
        last_name,
        phone_number,
        email,
        dob,
        gender,
        isDonor,
        isCreator,
        confirmedByAdmin,
      } = req.body;
  
      // Check if the user already exists
      const existingUser = await Users.findOne({ where: { username:username} });
  
      if (existingUser) {
        return res.status(409).json({
          data: null,
          status: 409,
          success: false,
          message: 'User with this email already exists!',
        });
      }
  
      // Create the user if it doesn't exist
      const newUser = await Users.create({
        username,
        password,
        first_name,
        last_name,
        phone_number,
        email,
        dob,
        gender,
        isDonor,
        isCreator,
        confirmedByAdmin,
      });
  
      res.status(201).json({
        data: newUser,
        status: 201,
        success: true,
        message: 'User created successfully!',
      });
    } catch (err) {
      res.status(400).json({
        data: null,
        status: 400,
        success: false,
        message: err.message,
      });
    }
  };
// update a user
export const updateUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const {
        username,
        password,
        first_name,
        last_name,
        phone_number,
        email,
        dob,
        gender,
        isDonor,
        isCreator,
        confirmedByAdmin,
      } = req.body;
  
      const user = await Users.findByPk(id);
  
      if (!user) {
        return res.status(404).json({
          data: null,
          status: 404,
          success: false,
          message: 'User not found!',
        });
      }
  
      // Update the user's information
      await Users.update(
        {
          username,
          password,
          first_name,
          last_name,
          phone_number,
          email,
          dob,
          gender,
          isDonor,
          isCreator,
          confirmedByAdmin,
        },
        { where: { id } }
      );
  
      // Fetch the updated user
      const updatedUser = await Users.findByPk(id);
  
      res.status(200).json({
        data: updatedUser,
        status: 200,
        success: true,
        message: 'User updated successfully!',
      });
    } catch (err) {
      res.status(500).json({
        data: null,
        status: 500,
        success: false,
        message: err.message,
      });
    }
  };
  
  // delete a user
  export const deleteUserById = async (req, res) => {
    try {
      const { id } = req.params;
  
      const userToDelete = await Users.findByPk(id);
  
      if (!userToDelete) {
        return res.status(404).json({
          data: null,
          status: 404,
          success: false,
          message: 'User not found!',
        });
      }
  
      // Delete the user
      await Users.destroy({
        where: { id },
      });
  
      res.status(200).json({
        data: null,
        status: 200,
        success: true,
        message: 'User deleted successfully!',
      });
    } catch (err) {
      res.status(500).json({
        data: null,
        status: 500,
        success: false,
        message: err.message,
      });
    }
  };
  
//   export const deleteUserById = async (req, res) => {
//     const { id } = req.params;
//     try {
//       const deleted = await User.destroy({ where: { id } });
//       if (deleted === 0) {
//         return res.status(404).json({
//           data: null,
//           status: 404,
//           success: false,
//           message: 'User not found!',
//         });
//       }
//       res.status(200).json({
//         data: null,
//         status: 200,
//         success: true,
//         message: 'User deleted successfully!',
//       });
//     } catch (err) {
//       res.status(500).json({
//         data: null,
//         status: 500,
//         success: false,
//         message: err.message,
//       });
//     }
//   };
  