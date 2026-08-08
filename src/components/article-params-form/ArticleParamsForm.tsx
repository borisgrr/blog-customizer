import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { Select } from 'src/ui/select';
import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';
import { ArticleParamsFormProps } from 'src/constants/articleProps';

export const ArticleParamsForm = ({
	articleParams,
	setArticleParams,
	onApply,
	onReset,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const formOpen = () => {
		setIsOpen((prev) => !prev);
	};

	const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onApply();
	};
	const onResetForm = (e: React.FormEvent<HTMLFormElement>) => {
		
		e.preventDefault();
		onReset();
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={formOpen} />

			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				<form
					className={styles.form}
					onSubmit={onSubmitForm}
					onReset={onResetForm}>
					<Text
						size={31}
						weight={800}
						family='open-sans'
						uppercase
						align='left'
						children={'задайте параметры'}
						as={'h2'}
					/>
					<Select
						options={fontFamilyOptions}
						selected={articleParams.fontFamilyOption}
						title='ШРИФТ'
						onChange={(value) => {
							setArticleParams({
								...articleParams,
								fontFamilyOption: value,
							});
						}}
					/>
					<RadioGroup
						options={fontSizeOptions}
						selected={articleParams.fontSizeOption}
						onChange={(value) => {
							setArticleParams({
								...articleParams,
								fontSizeOption: value,
							});
						}}
						name='fontSize'
						title='РАЗМЕР ШРИФТА'
					/>
					<Select
						options={fontColors}
						selected={articleParams.fontColor}
						title='ЦВЕТ ШРИФТА'
						onChange={(value) => {
							setArticleParams({
								...articleParams,
								fontColor: value,
							});
						}}
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={articleParams.backgroundColor}
						title='ЦВЕТ ФОНА'
						onChange={(value) => {
							setArticleParams({
								...articleParams,
								backgroundColor: value,
							});
						}}
					/>
					<Select
						options={contentWidthArr}
						selected={articleParams.contentWidth}
						title='ШИРИНА КОНТЕНТА'
						onChange={(value) => {
							setArticleParams({
								...articleParams,
								contentWidth: value,
							});
						}}
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
