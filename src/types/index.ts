export interface FeatureType {
  id: string;
  title: string;
}

export interface UserSignUpTypes {
  username: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RESPONSE_ERR {
  response: {
    data: {
      success: boolean;
      status: number;
      error: string;
      details: Record<"message", string>[];
    };
    status: number;
  };
}
