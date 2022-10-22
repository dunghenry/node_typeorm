import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
class userController {
  private static userRepository = AppDataSource.getRepository(User);
  static async getUsers(req: Request, res: Response) {
    try {
      const users = await userController.userRepository.find();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  static async getUser(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const user = await userController.userRepository.findOneBy({ id });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  static async createUser(req: Request, res: Response) {
    try {
      const newUser = new User();
      newUser.firstName = req.body.firstName;
      newUser.lastName = req.body.lastName;
      newUser.age = +req.body.age;
      const savedUser = await userController.userRepository.save(newUser);
      return res.status(201).json(savedUser);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  static async updateUser(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const user = await userController.userRepository.findOneBy({ id });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const updateUser = await userController.userRepository.update(
        {
          id,
        },
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          age: +req.body.age,
        }
      );
      return res.status(200).json(updateUser);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  static async deleteUser(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const user = await userController.userRepository.findOneBy({ id });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const deleteUser = await userController.userRepository.delete({
        id,
      });
      if (deleteUser.affected === 0) {
        return res.status(400).json({ message: "Delete user failed" });
      } else {
        return res.status(200).json({ message: "Deleted user successfully" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default userController;
