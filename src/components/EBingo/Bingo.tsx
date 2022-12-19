import { Button,  TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import useRest, { Card } from "./useRest";

const Bingo = () => {
	const [playerData, joinGame, checkWin, isValid, error] = useRest();
	const [bCode, setbCode] = useState<string>("");

	function refreshPage() {
		window.location.reload();
	}
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: isValid ? "center" : "start",
				alignItems: "center",
				minHeight: "100vh",
				gap: "1rem",
			}}>
			{!isValid && playerData === undefined && (
				<img
					style={{
						marginTop: "7rem"
					}}
					width={500}
					src="https://www.pngmart.com/files/17/Bingo-Game-PNG-Photos.png"
					alt="Bingo PNG" />
			)}
			{!isValid && playerData === undefined && (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						position: "relative",
						gap: "1rem",
						marginTop: "4rem",
					}}>
					<h2 style={{ textAlign: "center", fontSize: "2.5rem", color: "#7A5299" }}>
						Enter Bingo Game Code to join a game!
					</h2>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							joinGame(bCode);
						}}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							position: "relative",
							gap: "2rem",
						}}>
						{error && (
							<p
								style={{
									position: "absolute",
									left: "20rem",
									top: "-2.5rem",
									color: "Red",
									fontSize: ".8rem",
								}}>
								Game doesn't exist, Please try again.
							</p>
						)}
						<TextField
							value={bCode}
							onChange={(e) => setbCode(e.target.value)}
							variant="outlined"
							label="Bingo Game ID"
							autoComplete="off"
							sx={{ width: "20rem" }}>
						</TextField>
						<Button
							type="submit" size="large" color="success"
							sx={{ width: "max-content", alignSelf: "center", px: "2rem" }}
							variant="contained"
						>
							Join
						</Button>
					</form>
				</div>
			)}
			{isValid && playerData && (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "row",
						gap: "4rem",
					}}>
					<div style={{
						marginTop: "-1rem"
					}}>
						<div style={{
							marginBottom: "1rem"
						}}>
							<Button variant="contained" size="large" onClick={refreshPage} style={{
								marginTop: "2rem"
							}}>HOME</Button>
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								padding: "02rem",
								border: "3px solid blue",
								boxShadow: "4px 4px 5px #00000011",
								borderRadius: "10px",
								justifyContent: "start",
								position: "relative",
								borderColor: "#7A5299"
							}}>
							<p style={{ marginTop: "0rem", marginBottom: "1rem", fontWeight: "bold", fontSize: "2rem", color: "#B56727" }}>
								Player Details
							</p>
							<p style={{ color: "#B56727" }}>Game Code: {bCode}</p>
							<p style={{ color: "#B56727" }}>Playcard Token: {playerData.playcard_token}</p>
							<Button
								onClick={() => {
									checkWin();
								}}
								color="success" variant="outlined"
								sx={{
									fontSize: "1rem",
									p: ".5rem",
									mt: "2rem",
								}}>
								Check Win
							</Button>
						</div>
					</div>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(5,1fr)",
						}}>
						{Object.keys(playerData.card).map((key: string) => {
							return (
								<div className="">
									<h1
										style={{
											padding: "0rem 2rem",
											fontSize: "2rem",
											marginBottom: "1rem",
											fontWeight: "bold",
											color: "#4a006a"
										}}
									>
										{key}
									</h1>
									{playerData.card[key as keyof Card].map(
										(num: number, index: number) => {
											return (
												<div
													style={{
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														border: "1px solid gray",
														borderRight:
															key !== "O" ? "none" : "1px solid gray",
														borderBottom:
															index !== 4 ? "none" : "1px solid gray",
														padding: "1rem",
														fontSize: "2rem",
														color: "#7A5299"
													}}>
													{num}
												</div>
											);
										}
									)}
								</div>
							);
						})}
					</div>
				</div>
			)}
		</Box>
	);
};

export default Bingo;
